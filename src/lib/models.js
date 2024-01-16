const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
	{
		//키값 : 자료형
		title: {
			type: String,
			required: true
		},
		desc: {
			type: String,
			required: true
		},
		img: {
			type: String
		}
	},
	{ timeStamps: true }
);

export const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
//있으면 만들고 없으면 뒤에꺼
