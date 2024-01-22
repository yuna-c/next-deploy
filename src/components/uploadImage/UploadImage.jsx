'use client';
const { UploadButton } = require('@uploadthing/react');

export default function ImageUploader() {
	return (
		<div>
			<UploadButton
				endpoint='imageUploader'
				onClientUploadComplete={res => {
					console.log('Files: ', res);
					alert('Upload Completed');
				}}
				onUploadError={error => {
					alert(`ERROR! ${error.message}`);
				}}
			/>
		</div>
	);
}
