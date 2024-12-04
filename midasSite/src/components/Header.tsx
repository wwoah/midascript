export default function Header({ appVersion }: { appVersion: string }) {
  return (
    <>
      <p className="bg-custom-gradient bg-clip-text text-transparent">cole</p>{" "}
      <p className="bg-custom-gradient bg-clip-text text-transparent">
        Welcome to MidasScript! ALPHA v{appVersion}
      </p>{" "}
      <p className="bg-custom-gradient bg-clip-text text-transparent">
        phillip
      </p>
    </>
  );
}
