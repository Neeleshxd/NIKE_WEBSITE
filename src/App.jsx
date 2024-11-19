import {
  Hero,
  PopularProducts,
  Footer,
  Subscribe,
  Services,
  SuperQuality,
  SpecialOffer,
  CustomerReviews
} from './section';
import Nav from './Components/Nav';
const App = () => (
  <main className="relative">
   <Nav/>
   <section className="padding-b wide:padding-r xl:padding-l">
      <Hero/>
    </section>
   <section className="padding"> <PopularProducts/></section>
   <section className="padding"> <SuperQuality/></section>
   <section className="padding-x py-10"> <Services/></section>
   <section className="padding"> <SpecialOffer/></section>
   <section className="bg-pale-blue padding"> <CustomerReviews/></section>
   <section className="padding-x sm:py-32 py-16 w-full"> <Subscribe/></section>
   <section className="bg-black padding-x padding-x padding-t pb-8"> <Footer/></section>
  </main>
  
);
export default App;