import { useId } from "react";

interface SystemIllustrationProps {
  variant?: "windows" | "hyperexecute" | "fi";
}

const SystemIllustration = ({ variant = "windows" }: SystemIllustrationProps) => {
  const shadow = useId();
  return (
    <div className={`system-illustration illustration-${variant}`} aria-hidden="true">
      <svg viewBox="0 0 480 320" fill="none">
        <defs>
          <filter id={shadow} x="-30%" y="-30%" width="160%" height="180%">
            <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="currentColor" floodOpacity=".1" />
          </filter>
        </defs>
        <g className="illustration-grid" stroke="currentColor" strokeWidth=".5">
          {[80, 160, 240, 320, 400].map((x) => <path key={x} d={`M${x} 0V320`} />)}
          {[80, 160, 240].map((y) => <path key={y} d={`M0 ${y}H480`} />)}
        </g>
        {variant === "windows" ? (
          <>
            <rect x="79" y="39" width="322" height="244" rx="20" fill="currentColor" fillOpacity=".05" stroke="currentColor" strokeOpacity=".12" transform="rotate(-6 240 160)" />
            <g className="diagram-layer" filter={`url(#${shadow})`}>
              <rect x="61" y="48" width="358" height="232" rx="18" fill="var(--art-panel)" stroke="var(--art-line)" />
              <path d="M61 85H419" stroke="var(--art-line)" />
              <g fill="#6d8caf"><circle cx="79" cy="67" r="3" /><circle cx="91" cy="67" r="3" /><circle cx="103" cy="67" r="3" /></g>
              <text x="398" y="71" textAnchor="end" fill="#aabed5" fontSize="10">Windows onboarding</text>
              <rect x="85" y="110" width="114" height="144" rx="12" fill="#19334d" />
              <g fill="#1681e8"><rect x="118" y="143" width="22" height="22" rx="2" /><rect x="144" y="143" width="22" height="22" rx="2" /><rect x="118" y="169" width="22" height="22" rx="2" /><rect x="144" y="169" width="22" height="22" rx="2" /></g>
              <path d="M115 218h55" stroke="#bdd5f4" strokeWidth="5" strokeLinecap="round" />
              {["Setup flows", "OS integration", "Accessibility"].map((label, index) => (
                <g key={label} transform={`translate(221 ${122 + index * 43})`}>
                  <rect width="173" height="34" rx="8" fill="#1b2b3e" />
                  <circle cx="18" cy="17" r="8" fill="#1c466b" />
                  <path d="m14 17 3 3 5-6" stroke="#75c3ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <text x="35" y="21" fill="#b1c6de" fontSize="11">{label}</text>
                </g>
              ))}
            </g>
          </>
        ) : variant === "hyperexecute" ? (
          <>
            <path d="M115 161h43q14 0 14-14V91q0-14 14-14h34m-48 84h48m-48 0v70q0 14 14 14h34M348 77h18q14 0 14 14v56q0 14 14 14h18m-64 0h64m-64 84h18q14 0 14-14v-56q0-14 14-14" stroke="currentColor" strokeOpacity=".3" strokeWidth="1.5" />
            <g filter={`url(#${shadow})`}>
              <rect x="35" y="124" width="92" height="74" rx="15" fill="var(--art-panel)" stroke="var(--art-line)" />
              <path d="m70 147 16 10-16 10z" fill="#7b83c8" />
              <text x="81" y="183" textAnchor="middle" fill="#b4bade" fontSize="10">Test run</text>
              {["Worker 01", "Worker 02", "Worker 03"].map((label, index) => (
                <g className="diagram-layer" key={label} transform={`translate(218 ${46 + index * 84})`}>
                  <rect width="130" height="62" rx="12" fill="var(--art-panel)" stroke="var(--art-line)" />
                  <circle cx="18" cy="20" r="3" fill="#8991d4" />
                  <text x="30" y="24" fill="#b4bade" fontSize="11">{label}</text>
                  <path d="M18 42h94" stroke="#2c3555" strokeWidth="5" strokeLinecap="round" />
                  <path d={`M18 42h${[73, 49, 87][index]}`} stroke="#a5ace0" strokeWidth="5" strokeLinecap="round" />
                </g>
              ))}
              <rect x="397" y="135" width="48" height="54" rx="12" fill="var(--art-panel)" stroke="var(--art-line)" />
              <path d="M411 150h20m-20 8h20m-20 8h12" stroke="#9199cc" strokeWidth="2" strokeLinecap="round" />
            </g>
            <text x="421" y="210" textAnchor="middle" fill="#b4bade" fontSize="10">Report</text>
          </>
        ) : (
          <>
            <path d="M200 113h56M200 161h56M200 210h56" stroke="currentColor" strokeOpacity=".3" strokeDasharray="3 5" />
            <rect x="72" y="35" width="134" height="256" rx="24" fill="currentColor" fillOpacity=".06" transform="rotate(-5 139 163)" />
            <g className="diagram-layer" filter={`url(#${shadow})`}>
              <rect x="66" y="29" width="134" height="256" rx="23" fill="var(--art-panel)" stroke="var(--art-line)" />
              <rect x="110" y="40" width="46" height="5" rx="2.5" fill="#355f59" />
              <text x="84" y="76" fill="#a3cfba" fontSize="10">Money &amp; investments</text>
              <rect x="82" y="90" width="102" height="68" rx="11" fill="#1d443d" />
              <rect x="93" y="103" width="17" height="13" rx="3" fill="#8bbfad" />
              <path d="M93 139h34m8 0h10" stroke="#76aa98" strokeWidth="3" strokeLinecap="round" />
              {[181, 209, 237].map((y) => <g key={y}><circle cx="92" cy={y} r="8" fill="#244537" /><path d={`M110 ${y - 3}h57m-57 7h34`} stroke="#5e8d7d" strokeWidth="3" strokeLinecap="round" /></g>)}
            </g>
            {["Onboarding", "Live updates", "Workflows"].map((label, index) => (
              <g key={label} transform={`translate(255 ${87 + index * 62})`}>
                <rect width="163" height="45" rx="11" fill="var(--art-panel)" stroke="var(--art-line)" />
                <circle cx="22" cy="22" r="10" fill="#244537" />
                <path d="m18 22 3 3 6-7" stroke="#62a78b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <text x="42" y="26" fill="#a3cfba" fontSize="11">{label}</text>
              </g>
            ))}
          </>
        )}
      </svg>
    </div>
  );
};

export default SystemIllustration;
