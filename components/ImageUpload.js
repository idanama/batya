export const IndexPage = (props) => {
  const onChange = async (formData) => {
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
      },
    };

    const response = await axios.post('/api/uploads', formData, config);

    console.log('response', response.data);
  };

  return (
    /// will be linked to list a home component
    <UiFileInputButton label="Upload Single File" uploadFileName="theFiles" onChange={onChange} />
  );
};

// The TypeScript UiFileInputButton file below is just a wrapper around a file input and a button. The one main section I want to point out is the onChangeHandler code. Looking at lines 22–28, you will see we take the files given to us from the event.target.files and append them to a FormData object so the parent code just needs to handle the FormData for the request.

// export interface IProps {
//   acceptedFileTypes?: string;
//   allowMultipleFiles?: boolean;
//   label: string;
//   onChange: (formData: FormData) => void;
//   uploadFileName: string;
// }

// export const UiFileInputButton: React.FC<IProps> = (props) => {
//   const fileInputRef = React.useRef<HTMLInputElement | null>(null);
//   const formRef = React.useRef<HTMLFormElement | null>(null);

//   const onClickHandler = () => {
//     fileInputRef.current?.click();
//   };

//   const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (!event.target.files?.length) {
//       return;
//     }

//     const formData = new FormData();

//     Array.from(event.target.files).forEach((file) => {
//       formData.append(event.target.name, file);
//     });

//     props.onChange(formData);

//     formRef.current?.reset();
//   };

//   return (
//     <form ref={formRef}>
//       <button type="button" onClick={onClickHandler}>
//         {props.label}
//       </button>
//       <input
//         accept={props.acceptedFileTypes}
//         multiple={props.allowMultipleFiles}
//         name={props.uploadFileName}
//         onChange={onChangeHandler}
//         ref={fileInputRef}
//         style={{ display: 'none' }}
//         type="file"
//       />
//     </form>
//   );
// };

// UiFileInputButton.defaultProps = {
//   acceptedFileTypes: '',
//   allowMultipleFiles: false,
// };
