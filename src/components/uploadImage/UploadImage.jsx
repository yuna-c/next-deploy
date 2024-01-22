'use client';
const { UploadButton } = require('@uploadthing/react');
import { useGlobalData } from '@/hooks/useGlobalData';

export default function ImageUploader() {
	const { setImgUrl } = useGlobalData();
	return (
		<div>
			<UploadButton
				endpoint='imageUploader'
				onClientUploadComplete={res => {
					console.log('Files: ', res);
					setImgUrl(res[0].url);
					alert('Upload Completed');
				}}
				onUploadError={error => {
					alert(`ERROR! ${error.message}`);
				}}
			/>
		</div>
	);
}
