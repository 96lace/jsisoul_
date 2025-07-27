document.getElementById("file-upload").addEventListener("change", function () {
    const fileNameElement = document.getElementById("file-name");
    if (this.files.length > 0) {
      // Display the file name of the first selected file
      fileNameElement.textContent = `selected file: ${this.files[0].name}`;
    } else {
      // If no file is selected, reset the message
      fileNameElement.textContent = "no file selected";
    }
  });