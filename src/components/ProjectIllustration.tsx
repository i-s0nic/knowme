const ProjectIllustration = ({ project }: { project: string }) => (
  <svg className="project-illustration" viewBox="0 0 480 210" fill="none">
    <rect x="112" y="30" width="264" height="168" rx="16" fill="currentColor" fillOpacity=".06" transform="rotate(3 244 114)" />
    <g className="diagram-layer">
      <rect x="104" y="22" width="272" height="166" rx="14" fill="var(--art-panel)" stroke="currentColor" strokeOpacity=".3" />
      <path d="M104 53H376" stroke="currentColor" strokeOpacity=".12" />
      <g fill="currentColor" fillOpacity=".3"><circle cx="122" cy="38" r="2.5" /><circle cx="132" cy="38" r="2.5" /><circle cx="142" cy="38" r="2.5" /></g>
      {project === "tax-statement-generator" ? (
        <>
          <text x="127" y="81" fill="currentColor" fontSize="11">Tax statement</text>
          <path d="M127 94h90M127 121h132m-132 16h132m-132 16h84" stroke="currentColor" strokeOpacity=".2" strokeWidth="4" strokeLinecap="round" />
          <rect x="285" y="74" width="68" height="90" rx="8" fill="currentColor" fillOpacity=".07" />
          <path d="M302 93h33m-33 10h33m-33 10h20" stroke="currentColor" strokeOpacity=".4" strokeWidth="3" strokeLinecap="round" />
          <circle cx="333" cy="149" r="16" fill="#e5f4ec" />
          <path d="m326 149 5 5 9-11" stroke="#5b9b7e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : project === "combett" ? (
        <>
          <rect x="120" y="69" width="71" height="102" rx="9" fill="currentColor" fillOpacity=".06" />
          <circle cx="155" cy="99" r="15" fill="currentColor" fillOpacity=".18" />
          <path d="M138 131h34m-26 13h18" stroke="currentColor" strokeOpacity=".25" strokeWidth="4" strokeLinecap="round" />
          {[70, 123].map((y) => <g key={y}><rect x="205" y={y} width="154" height="44" rx="8" stroke="currentColor" strokeOpacity=".15" /><circle cx="223" cy={y + 15} r="5" fill="currentColor" fillOpacity=".3" /><path d={`M239 ${y + 14}h81m-99 15h110`} stroke="currentColor" strokeOpacity=".18" strokeWidth="3" strokeLinecap="round" /></g>)}
        </>
      ) : project === "get-weather" ? (
        <>
          <rect x="124" y="69" width="230" height="23" rx="7" fill="currentColor" fillOpacity=".06" />
          <circle cx="139" cy="80" r="4" stroke="currentColor" strokeOpacity=".4" />
          <path d="m142 83 3 3M155 81h83" stroke="currentColor" strokeOpacity=".3" strokeWidth="2" strokeLinecap="round" />
          <text x="127" y="129" fill="currentColor" fontSize="14">Local forecast</text>
          <path d="M128 146h91m-91 12h63" stroke="currentColor" strokeOpacity=".2" strokeWidth="4" strokeLinecap="round" />
          <circle cx="305" cy="125" r="24" fill="#f8df97" />
          <path d="M283 158h50a15 15 0 0 0-3-30 23 23 0 0 0-43-1 16 16 0 0 0-4 31Z" fill="#e4eff6" stroke="#c3d9e8" />
        </>
      ) : project === "student-info-system" ? (
        <>
          <text x="125" y="80" fill="currentColor" fontSize="11">Student records</text>
          <rect x="123" y="94" width="233" height="73" rx="7" fill="currentColor" fillOpacity=".04" stroke="currentColor" strokeOpacity=".1" />
          <path d="M123 114h233m-233 18h233m-233 18h233M200 94v73M280 94v73" stroke="currentColor" strokeOpacity=".12" />
          {[104, 123, 141, 159].map((y) => <g key={y} stroke="currentColor" strokeOpacity={y === 104 ? ".45" : ".2"} strokeWidth="3" strokeLinecap="round"><path d={`M135 ${y}h42m35 0h45m37 0h46`} /></g>)}
        </>
      ) : (
        <>
          <rect x="119" y="67" width="57" height="104" rx="7" fill="currentColor" fillOpacity=".05" />
          <path d="M131 82h29m-29 13h22m-22 13h27" stroke="currentColor" strokeOpacity=".25" strokeWidth="3" strokeLinecap="round" />
          <g strokeWidth="4" strokeLinecap="round"><path d="M193 81h39m9 0h49" stroke="#8097cd" /><path d="M206 98h63m8 0h34" stroke="#78aaa5" /><path d="M206 115h27m9 0h67" stroke="#aa97bb" /><path d="M206 132h77m8 0h31" stroke="#78aaa5" /><path d="M193 149h25" stroke="#8097cd" /></g>
        </>
      )}
    </g>
  </svg>
);

export default ProjectIllustration;
