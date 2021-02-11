import React from "react";
import "./addPhoto.scss"

export function AddPhoto(props) {
  const {onChange,name, value} = props
  const [image, setImage] = React.useState(null)
  // const [url, setUrl] = React.useState("");

 

  // const handleUpload = () => {
  //   const uploadTask = storage.ref(`images/${image.name}`).put(image);
  //   uploadTask.on(
  //     "state_changed",
  //     snapshot => {
  //       const progress = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       // setProgress(progress);
  //     },
  //     error => {
  //       console.log(error);
  //     },
  //     () => {
  //       storage
  //         .ref("images")
  //         .child(image.name)
  //         .getDownloadURL()
  //         .then(url => {
  //           setUrl(url);
  //         });
  //     }
  //   );
  // };

   const handleChangeImg = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // console.log("image: ", image);

  return (
    <div>
      <label className="new-addPhoto">Foto
      <div className="addPhoto-content">
          <div className="addPhoto">
            <input id="photo"
              className="addPhoto"
              type="file"
              onChange={(e) => onChange(e)}
              name={name}
              value={value}
            />
            <p>Adicione uma imagem</p>
          </div>
        </div>
      </label>
    </div>
  );
}
