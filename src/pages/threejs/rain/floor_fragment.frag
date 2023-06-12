

// https://www.shadertoy.com/view/ldfyzl 雨滴涟漪
// 波纹可以穿过的最大单元数
#define MAX_RADIUS 2
// 设置为1可散列两次。速度较慢，但图案较少。
#define DOUBLE_HASH 0
// Hash functions shamefully stolen from:
// https://www.shadertoy.com/view/4djSRW
#define HASHSCALE1 .1031
#define HASHSCALE3 vec3(.1031, .1030, .0973)

uniform vec3 color;
uniform sampler2D tDiffuse;
uniform float uTime;
uniform sampler2D uRoughnessTexture;
uniform sampler2D uNormalTexture;
uniform sampler2D uOpacityTexture;
uniform vec2 uTexScale;
uniform vec2 uTexOffset;
uniform float uDistortionAmount;

varying vec2 vUv;
varying vec4 vMirrorCoord;


float hash12(vec2 p)
{
	vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.x + p3.y) * p3.z);
}
vec2 hash22(vec2 p)
{
	vec3 p3 = fract(vec3(p.xyx) * HASHSCALE3);
    p3 += dot(p3, p3.yzx+19.19);
    return fract((p3.xx+p3.yz)*p3.zy);
}
void main() {
	// vec4 base = texture2DProj( tDiffuse, vMirrorCoord );
	vec2 texUv=vUv*uTexScale;
	texUv+=uTexOffset;
	float floorOpacity=texture(uOpacityTexture,texUv).r;
	vec3 floorNormal=texture(uNormalTexture,texUv).rgb*2.0-1.0; // 从 0,1 变为 -1,1
	floorNormal=normalize(floorNormal);
	// gl_FragColor = vec4(floorNormal * uDistortionAmount, 1.0 );
	float roughness=texture(uRoughnessTexture,texUv).r;
	vec2 reflectionUv=vMirrorCoord.xy/vMirrorCoord.w; // 镜面坐标
	vec2 rippleUv=75.0*vUv*uTexScale; // 波纹坐标

	vec2 p0=floor(rippleUv);
	vec2 circles = vec2(0.);
  for (int j = -MAX_RADIUS; j <= MAX_RADIUS; ++j)
  {
        for (int i = -MAX_RADIUS; i <= MAX_RADIUS; ++i)
        {
			vec2 pi = p0 + vec2(i, j);
            #if DOUBLE_HASH
            vec2 hsh = hash22(pi);
            #else
            vec2 hsh = pi;
            #endif
            vec2 p = pi + hash22(hsh);

            float t = fract(0.3*uTime + hash12(hsh));
            vec2 v = p - rippleUv;
            float d = length(v) - (float(MAX_RADIUS) + 1.)*t;

            float h = 1e-3;
            float d1 = d - h;
            float d2 = d + h;
            float p1 = sin(31.*d1) * smoothstep(-0.6, -0.3, d1) * smoothstep(0., -0.3, d1);
            float p2 = sin(31.*d2) * smoothstep(-0.6, -0.3, d2) * smoothstep(0., -0.3, d2);
            circles += 0.5 * normalize(v) * ((p2 - p1) / (2. * h) * (1. - t) * (1. - t));
        }
  }
	circles /= float((MAX_RADIUS*2+1)*(MAX_RADIUS*2+1));
	vec3 n = vec3(circles, sqrt(1. - dot(circles, circles)));
	float intensity=0.05*floorOpacity;
	vec2 rainUv=intensity*n.xy; // 雨水波动动效
	vec2 finalUv=reflectionUv+floorNormal.xy*uDistortionAmount-rainUv;
	vec3 col = texture2D( tDiffuse, finalUv ).rgb;
  gl_FragColor=vec4(col,1.);
}
