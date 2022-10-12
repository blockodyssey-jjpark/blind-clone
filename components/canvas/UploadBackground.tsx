{
  /* <input
        ref={imageInput}
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={changeBackgroundImage}
        hidden
      /> */
}
{
  /* <button type="button" onClick={uploadBackgroundImage}>
        add image
      </button> */
}

//-----------------------------------------------

// const uploadBackgroundImage = () => {
//   imageInput.current?.click();
// };
// const changeBackgroundImage = async (e) => {
//   const file = e.target.files[0];
//   const src = await getImageSrc(file);

//   if (drawnImages.length === 0) {
//     setDrawnImages([{ type: "background", src, width: 500, height: 500 }]);
//     return;
//   }

//   if (drawnImages.length > 0) {
//     if (drawnImages[0].type === "background") {
//       const newArr = [...drawnImages];
//       newArr[0].src = src;
//       setDrawnImages(newArr);
//       return;
//     }
//     const newArr = [...drawnImages];
//     newArr.unshift({ type: "background", src, width: 500, height: 500 });
//     setDrawnImages(newArr);
//     return;
//   }
// };
