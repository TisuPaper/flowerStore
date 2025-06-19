'use client';

import Testimonial from './Testimonial';

export default function Testimonials() {
  const testimonials = [
    {
      avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC60c90tx3FPP75TOF-zCFcEx8SpEqJanTvyFL9uDFJ-GWGLutrX0xXm1ReGNuYMxBe1vE_RA1z_o4rFAXEC1uMChpPKol8XhOh0TsjA2_NYvMuvj4OfHkXZMHOv9S3tD0GCzTmuWd95k4uuRS9SpMKS24hjnaVN1pl0GHNsySyLrY7C4llN86-gIjSGiupE8UoWmQZ0mWodRQOqt1l3KOpfwAfBFXK4SLptFZTHheYR79W0NhhBFphXyu8BCQfN-sElI5qbgFRwH-t",
      name: "Emily Carter",
      date: "May 15, 2024",
      rating: 5,
      comment: "The flowers were absolutely stunning and arrived right on time! The arrangement was even more beautiful than the picture. Highly recommend!",
      likes: 12,
      dislikes: 1
    },
    {
      avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMA3WQri36EJab-qW9trmIl8J82yQFwHOeGlGaU7EPz6YraS9x15QCFvPKCvqwVCBJmEB31aaCY7yDTeI50bH5zJ9Zi8AR9sVtD8eYCZvA3MlmJzA4Oc4GUlcdE7XkKkvRI6vSs2dZyn9oTwWmgwOTJhezMaxpEiG73OrG3nYd-J-P7ycJob_ol0mAAQSFOmPLY9DE0XRZM2sLWVpXy8X0BbBTg2oxkPAdvknDFo8Kmahjbj0taT7GMNsGYNkQDskmRh09MiYvpyQQ",
      name: "David Lee",
      date: "April 22, 2024",
      rating: 4,
      comment: "Great service and beautiful flowers. The recipient loved them. Only minor issue was a slight delay in delivery, but overall very satisfied.",
      likes: 8,
      dislikes: 2
    }
  ];

  return (
    <>
      <h2 className="text-[#181112] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Customer Testimonials
      </h2>
      <div className="flex flex-col gap-8 overflow-x-hidden bg-white p-4">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            avatarUrl={testimonial.avatarUrl}
            name={testimonial.name}
            date={testimonial.date}
            rating={testimonial.rating}
            comment={testimonial.comment}
            likes={testimonial.likes}
            dislikes={testimonial.dislikes}
          />
        ))}
      </div>
    </>
  );
}