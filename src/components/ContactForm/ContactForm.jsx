import { CommentText, SubmitButton, TextInput } from "./ContactForm.styles";

import { useForm, ValidationError } from '@formspree/react';
export default function ContactForm() {
  const [state, handleSubmit] = useForm("meqynnan");
  if (state.succeeded) {
      return <p>Thanks for the message!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your name: </label>
      <TextInput
        id="name"
        type="text" 
        name="name"
        placeholder="Your name"
        required=""
      />
            <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
 <br />
      <label htmlFor="email">
        Your email: </label>
      <TextInput
        id="email"
        type="email" 
        name="email"
        placeholder="Your email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      /><br />
      <label htmlFor="message">
        Your message: </label><br />
      <CommentText
        id="message"
        name="message"
        placeholder="What I love about your coding is..."
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      /><br />
      <SubmitButton type="submit" disabled={state.submitting}>
        Submit
      </SubmitButton>
    </form>
  );
}