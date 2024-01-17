import { revalidatePath } from 'next/cache';
import { connectDB } from './connectDB';
import { Post } from './models';
import { redirect } from 'next/navigation';

export const getPosts = async (id, reverse = -1) => {
	try {
		connectDB();
		let posts = null;
		if (id) posts = await Post.findById(id);
		else posts = await Post.find().sort({ _id: reverse }); // 이미지 역순 변경
		return posts;
	} catch (err) {
		console.log(err);
		throw new Error('Fail to fetch All posts data!!');
	}
};

export const addPost = async formData => {
	'use server';
	const { title, img, desc } = Object.fromEntries(formData);

	try {
		connectDB();
		const newPost = new Post({ title, img, desc });
		await newPost.save();
		console.log(newPost);
		// window.alert('post 등록 성공'); 서버는 안됌
	} catch (err) {
		console.log(err);
		throw new Error('Fail to save Post!');
	}

	revalidatePath('/post'); //갱신
	redirect('/post'); //글 저장 후 강제 목록 페이지 이동
};

export const deletePost = async formData => {
	'use server';

	try {
		connectDB();
		const data = Object.fromEntries(formData);
		//const id = { _id: Object.keys(data)[0] };
		const id = Object.keys(data)[0];

		//findByAndDelete(id); id:삭제할 document의 _id의 value값 전달 (객체전달 아님)
		await Post.findByIdAndDelete(id);
	} catch (err) {
		console.log(err);
		throw new Error('Fail to delete Post');
	}

	revalidatePath('/post');
	redirect('/post');
};
