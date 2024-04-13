import { auth } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      <span>{JSON.stringify(session)}</span>
    </div>
  );
};

export default SettingsPage;
