import { useEffect } from "react";
import SectionHeading from "./SectionHeading";

const ReviewsSection = () => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="reviews" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          subtitle="Real reviews from real customers — see why Glasgow trusts RR Detailing."
        />
        <div className="max-w-5xl mx-auto">
          <div
            className="elfsight-app-7bb9fbae-dbeb-4f1b-937d-63cc6dc6d204"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
