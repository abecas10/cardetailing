import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    author: "INDRIT HAMZA",
    quote:
      "I had an amazing experience with Enri Customs! The attention to detail is incredible, and the quality of their car wraps and detailing work is top-notch. My car looks brand new and better than ever. Highly recommended for anyone who wants professional service and stunning results!",
  },
  {
    author: "Aferdita Bitra",
    quote: "Very professional work, much recommended.",
  },
  {
    author: "Ylli Kullolli",
    quote: "Great service, highly recommended!",
  },
  {
    author: "Bezoo Bezoo",
    quote: "This guy is very professional and friendly.",
  },
  {
    author: "Cosmin Stoleriu",
    quote: "Amazing job.",
  },
  {
    author: "Amina Iqbal",
    quote:
      "Amazing detailing service with incredible attention to detail. The car came out spotless and the finish looked incredible. Very professional and highly recommended.",
  },
  {
    author: "Arsi Ismaili",
    quote: "10/10.",
  },
];

const duplicatedReviews = [...reviews, ...reviews];

const GoogleLogo = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true" className="h-7 w-7 shrink-0">
    <path
      className="google-blue"
      d="M44.5 20H24v8.5h11.8C34.7 33.9 30 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 1.1 8.2 3.1l6.4-6.4C34.5 3.9 29.5 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22 21-9.3 21-22c0-1.3-.2-2.7-.5-4Z"
    />
    <path className="google-green" d="M6.3 14.7 13.3 19.8C15.2 15.1 19.2 12 24 12c3.1 0 6 1.1 8.2 3.1l6.4-6.4C34.5 3.9 29.5 2 24 2 15.4 2 8 6.9 4.3 14.1Z" />
    <path className="google-yellow" d="M24 46c5.4 0 10.4-1.8 14.2-4.9l-6.6-5.4C29.6 37.1 26.9 38 24 38c-5.9 0-10.9-3.9-12.6-9.2l-7.1 5.4C8 41.4 15.4 46 24 46Z" />
    <path className="google-red" d="M4.3 14.1A21.8 21.8 0 0 0 2 24c0 3.6.9 7.1 2.4 10.2l7.1-5.4A13 13 0 0 1 11 24c0-1.6.3-3 .9-4.2Z" />
  </svg>
);

const ReviewsSection = () => {
  return (
    <section id="reviews" className="overflow-hidden bg-secondary py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          label="Google Reviews"
          title="Rated 5/5 by Our Clients"
          subtitle="Real customer feedback presented in a Google-inspired layout, tailored to match the RR Detailing look."
        />

        <div className="mx-auto mb-10 flex max-w-6xl flex-col gap-6 rounded-[2rem] border border-border/60 bg-card/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm lg:flex-row lg:items-center lg:justify-between lg:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background ring-1 ring-border/70">
              <GoogleLogo />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-display text-3xl font-black tracking-tight text-foreground">5.0</p>
                <div className="flex items-center gap-1 text-xl text-primary" aria-label="5 out of 5 stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Google Reviews</span>
                <span aria-hidden="true">•</span>
                <span>7 verified 5-star reviews shown</span>
              </div>
            </div>
          </div>

          <Button asChild size="lg" className="w-full rounded-full px-8 font-display text-sm font-bold tracking-[0.18em] lg:w-auto">
            <a
              href="https://www.google.com/search?hl=ca-ES&gl=es&q=RR+Revive+%26+Refine+Detailing,+4+Keith+St,+Hamilton+ML3+7BL,+Regne+Unit&ludocid=11208057179903596579&lsig=AB86z5VFhK7p7kTCVrSh5Ef0LNLg#lrd=0x4888154c900f248f:0x9b8b049f4e6b9823,3"
              target="_blank"
              rel="noreferrer"
            >
              Leave a review
            </a>
          </Button>
        </div>

        <div className="review-marquee relative mx-auto max-w-7xl overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-secondary to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-secondary to-transparent" />

          <div className="review-marquee__track flex w-max gap-5 py-2">
            {duplicatedReviews.map((review, index) => (
              <article
                key={`${review.author}-${index}`}
                className="w-[18rem] shrink-0 rounded-[1.75rem] border border-border/60 bg-card p-5 shadow-lg shadow-black/15 transition-transform duration-300 hover:-translate-y-1 sm:w-[20rem] lg:w-[22rem]"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="font-display text-lg font-bold tracking-tight text-foreground">{review.author}</p>
                    <div className="mt-1 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      <span>Google Reviews</span>
                    </div>
                  </div>
                  <GoogleLogo />
                </div>

                <div className="mb-4 flex items-center gap-1 text-base leading-none text-primary" aria-hidden="true">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                <p className="line-clamp-6 text-sm leading-7 text-muted-foreground">“{review.quote}”</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
