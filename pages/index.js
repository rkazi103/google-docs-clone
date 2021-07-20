import Head from "next/head";
import Header from "../components/Header";
import NewDocumentSection from "../components/NewDocumentSection";
import Icon from "@material-tailwind/react/Icon";
import { getSession, useSession } from "next-auth/client";
import Login from "../components/Login";

export default function Home() {
  const [session] = useSession();

  if (!session) return <Login />;

  return (
    <div className="">
      <Head>
        <title>Google Docs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <NewDocumentSection />

      <section className="bg-white px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow">My Documents</h2>
            <p className="mr-12">Date Created</p>
            <Icon name="folder" size="3xl" color="gray" />
          </div>
        </div>
      </section>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
