function createMessage(type = "success", message = "Mission accomplished!") {
  const html = `<div class="message ${type}">${message}</div>`;

  return html;
}
