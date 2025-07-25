import Agents from "./components/agents/page";
import AskchatCRM from "./components/askchatCRM/page";
import Brands from "./components/brands/page";
import Header from "./components/header/page";
import Platform from "./components/platform/page";
import Footer from "./components/footer/page";
// import Form from "./components/form/page";
import Solutions from "./components/solutions/page";
import Customers from "./components/customers/page";

export default function Home() {
  return (
    <main className="flex justify-center w-full">
      <section className="w-full">
        <Header />
        <AskchatCRM />
        <Agents />
        <Platform />
        <Brands />
        <Customers />
        <Solutions />
        {/* <Form /> */}
        <Footer />
      </section>
    </main>
  );
}

