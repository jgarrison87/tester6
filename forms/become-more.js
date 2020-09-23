// function FadeInSection(props) {
//   const [isVisible, setVisible] = React.useState(true);
//   const domRef = React.useRef();
//   React.useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => setVisible(entry.isIntersecting));
//     });
//     observer.observe(domRef.current);
//     return () => observer.unobserve(domRef.current);
//   }, []);
//   return (
//     <div
//       className={`get-started ${isVisible ? "is-visible" : ""}`}
//       ref={domRef}
//     >
//       {props.children}
//     </div>
//   );
// }


const closeBtn = document.querySelector(".email-modal-close");
const submitBtn = document.querySelector(".submit");
const ctaSubmitBtn = document.querySelector(".cta-submit");
const ctaCloseBtn = document.querySelector(".cta-modal-close");

// email modal
submitBtn.addEventListener('click', () => {
  document.getElementById("email-modal-bg").classList.remove("email-modal-active");
});

closeBtn.addEventListener('click', () => {
  document.getElementById("email-modal-bg").classList.remove("email-modal-active");
});


function modalOpen10() {
  document.getElementById("email-modal-bg").classList.add("email-modal-active");
}

setTimeout("modalOpen10()", 10000);

// cta modal
ctaSubmitBtn.addEventListener('click', () => {
  document.getElementById('cta-modal-bg').classList.remove('cta-modal-active');
});

ctaCloseBtn.addEventListener('click', () => {
  document.getElementById("cta-modal-bg").classList.remove("cta-modal-active");
});

function modalOpen60() {
  document.getElementById('cta-modal-bg').classList.add('cta-modal-active');
}

setTimeout("modalOpen60()", 60000);