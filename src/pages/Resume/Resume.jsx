import { ResumeContainer, ResumeFrame } from './Resume.styles';

const EmbeddedPDF = () => {
  return (
    <ResumeContainer>
      <ResumeFrame
        src="/assets/KeriSenResume.pdf"
      >
        <p>Your browser does not support embedded PDF files. You can download the PDF <a href="/assets/KeriSenResume.pdf">here</a>.</p>
      </ResumeFrame>
    </ResumeContainer>
  );
};

export default function Resume() {
  return (
    <section>
     <EmbeddedPDF />
    </section>
  );
}
