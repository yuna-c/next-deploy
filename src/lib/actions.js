import { revalidatePath } from 'next/cache';
import { connectDB } from './connectDB';
import { Post } from './models';
import { redirect } from 'next/navigation';

export const getPosts = async id => {
	try {
		connectDB();
		let posts = null;
		if (id) posts = await Post.findById(id);
		else posts = await Post.find().sort({ _id: -1 }); // 이미지 역순 변경
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
