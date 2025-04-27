import React from 'react';

const StoreButtons: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 mb-8 px-6 w-full">
      {/* Google Play Button */}
      <a 
        href="https://play.google.com/store/search?q=isthara&c=apps&hl=en" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#2A2A2A] text-white rounded-lg py-3 px-4 flex items-center gap-4 hover:bg-[#1A1A1A] transition-colors w-full"
      >
        <div className="w-8 h-8 flex items-center justify-center">
          <svg width="28" height="32" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g transform="translate(-545.000000, -518.000000)">
                <g transform="translate(545.000000, 518.000000)">
                  <path
                    d="M21.9331304,12.3651652 L0.346956522,0.0281217391 C0.281217391,-0.010226087 0.19173913,-0.0084 0.124173913,0.0299478261 C0.0730434783,0.0609913043 0,0.119426087 0,0.228991304 L0.0164347826,3.06490435 L15.6258261,18.6742957 L21.9331304,12.3651652 Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M14.6786348,19.6304348 L0.0242869565,4.98521739 C0.0425478261,9.17973913 0.0717652174,15.5765217 0.100982609,21.8034783 L0.155765217,34.1514783 L14.6786348,19.6304348 Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M35.4949304,20.1163565 L23.1487565,13.0621826 L16.5748435,19.6306174 L24.0983217,27.1559217 L35.5004087,20.5144435 C35.5734522,20.4724435 35.6172783,20.3957478 35.6172783,20.3190522 C35.6172783,20.2387043 35.5716261,20.1601826 35.4949304,20.1163565"
                    fill="#FFFFFF"
                  />
                  <g transform="translate(0.000000, 20.013153)">
                    <path
                      d="M0.155582609,16.0431167 L0.181147826,20.7087689 C0.181147826,20.7927689 0.219495652,20.8639862 0.283408696,20.8968558 C0.367408696,20.9479862 0.453234783,20.9498123 0.522626087,20.9059862 L22.8994957,7.85676886 L15.6261913,0.58346451 L0.155582609,16.0431167 Z"
                      fill="#FFFFFF"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="flex flex-col items-start justify-center">
          <span className="text-xs opacity-80">Get it on</span>
          <span className="text-sm font-semibold leading-tight">Google Play</span>
        </div>
      </a>

      {/* App Store Button */}
      <a 
        href="https://apps.apple.com/in/app/isthara/id1413768401" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#1F012B] text-white rounded-lg py-3 px-4 flex items-center gap-4 hover:bg-[#15011E] transition-colors w-full"
      >
        <div className="w-8 h-8 flex items-center justify-center">
          <svg width="25" height="31" viewBox="0 0 33 41" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <polygon id="path-2" points="0 0.0427417333 32.6670466 0.0427417333 32.6670466 30.4780879 0 30.4780879" />
            </defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g transform="translate(-546.000000, -592.000000)">
                <g transform="translate(546.000000, 592.000000)">
                  <path
                    d="M22.2461868,6.40540793 C24.8616412,3.26254437 24.3173144,0 24.3173144,0 C24.3173144,0 20.6569816,0.0169900529 18.0241488,3.48708164 C15.6829313,6.57287285 16.2789985,9.21215677 16.2789985,9.21215677 C16.2789985,9.21215677 19.4533934,9.76128898 22.2461868,6.40540793"
                    fill="#FFFFFF"
                  />
                  <g transform="translate(0.000000, 9.592962)">
                    <mask id="mask-3" fill="white">
                      <use xlinkHref="#path-2" />
                    </mask>
                    <path
                      d="M27.2686136,11.642386 C27.2686136,6.26619614 31.6022291,4.05051156 31.6022291,4.05051156 C31.6022291,4.05051156 29.3865445,0.0427417333 23.7541544,0.0427417333 C20.4820716,0.0427417333 17.9683864,1.90460402 16.6138559,1.90460402 C15.0360388,1.90460402 12.680866,0.15438501 9.64589354,0.15438501 C4.97734824,0.15438501 0,4.3345568 0,12.3031615 C0,20.402302 5.88036856,30.4781077 10.5349585,30.4781077 C12.1596446,30.4781077 14.6543057,28.8414409 17.1680568,28.8414409 C19.6348071,28.8414409 21.454869,30.4191922 23.7960864,30.4191922 C28.8932998,30.4191922 32.6670532,19.7974139 32.6670532,19.7974139 C32.6670532,19.7974139 27.2686136,17.707328 27.2686136,11.642386"
                      fill="#FFFFFF"
                      mask="url(#mask-3)"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="flex flex-col items-start justify-center">
          <span className="text-xs opacity-80">Download on the</span>
          <span className="text-sm font-semibold leading-tight">App Store</span>
        </div>
      </a>
    </div>
  );
};

export default StoreButtons;