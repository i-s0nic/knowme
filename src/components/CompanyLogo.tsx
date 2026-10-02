const logos: Readonly<Record<string, string>> = {
  Microsoft: "microsoft.svg",
  "TestMu AI (formerly LambdaTest)": "testmu.svg",
  Fi: "fi.svg",
  Ridecell: "ridecell.png",
  Masai: "masai.jpeg",
  "Fractal: The Coding Club, IET Lucknow": "fractal.jpeg",
};

const CompanyLogo = ({ company }: { company: string }) => {
  const file = logos[company];
  return typeof file === "string" ? (
    <img className="company-logo" src={`${import.meta.env.BASE_URL}companies/${file}`} width="56" height="56" alt="" />
  ) : null;
};

export default CompanyLogo;
