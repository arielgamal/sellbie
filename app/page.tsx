import Agents from "./components/agents/page";
import AskchatCRM from "./components/askchatCRM/page";
import Brands from "./components/brands/page";
import Footer from "./components/footer/page";
import Form from "./components/form/page";
import Header from "./components/header/page";
import Solutions from "./components/solutions/page";
import Platform from "./components/platform/page";
import Customers from "./components/customers/page";

export default function Home() {
  return (
    <main className="flex justify-center w-full">
      <section className="w-full max-w-[1440px] ">
        <Header />
        <AskchatCRM />
        <Agents />
        <Platform />
        <Brands />
        <Customers />
        <Solutions />
        <Form />
        <Footer />
      </section>
    </main>
  );
}
