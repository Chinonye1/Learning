function CustomButton({url, text}) {
  return (
    <div>
      <a href={url} >
      <button class="btn"> {text}</button>
        </a>
    </div>
    );
}

export default CustomButton;

