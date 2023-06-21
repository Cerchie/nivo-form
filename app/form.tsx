const Form =()=> {
  return (
<form action="/send-data-here" method="post">
  <label htmlFor="language">What is your language of choice when building a Kafka client?</label>
  <input type="text" id="language" name="language" />
  <button type="submit">Submit</button>
</form>
  );
};

export default Form;