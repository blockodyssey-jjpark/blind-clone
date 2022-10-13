const getBackgroundImage = () => {
  return new Promise((resolve: (value: string) => void, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = (event) => {
      const base = event.target?.result;
      if (!base) {
        reject(new Error('이미지 업로드에 실패했습니다.'));
        return;
      }
      resolve(base as string);
    };
    fileReader.onerror = () => {
      reject(new Error('이미지 업로드에 실패했습니다.'));
    };

    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.onchange = (event) => {
      const fileInput = event.target as HTMLInputElement;
      if (fileInput.files) {
        const file = fileInput.files[0];
        fileReader.readAsDataURL(file);
      }
    };
    input.click();
  });
};

export default getBackgroundImage;
