import clsx from 'clsx';
import styles from './postDetail.module.scss';
import { deletePost, getPosts } from '@/lib/actions';
import Image from 'next/image';
import Link from 'next/link';

export default async function PostDetail({ params }) {
	const { id } = params;
	const post = await getPosts(id);
	console.log(post);

	return (
		<section className={clsx(styles.postDetail)}>
			<h1>PostDetail</h1>

			{/* onClick : 클라이언트 컴포넌트로 인지 쓰면안됌 */}
			<article>
				<div className={clsx(styles.pic)}>{post.img && <Image src={post.img} alt={post.title} priority fill />}</div>
				<div className={clsx(styles.txt)}>
					<h2>{post.title}</h2>
					<p>{post.desc}</p>

					{/* 서버컴포넌트에서 onClick 연결 불가(Client방식에서만 가능) */}
					{/* 이벤트발생시킬 버튼을 form으로 감싼뒤 서버액션함수를 action에 등록, 인수전달시에는 hidden타입으로 input만들어서 name에 연동해놓으면 서버액션함수에 파라미터로 전달됨 */}

					<nav>
						<Link href={`/post/edit/${id}`}>Edit</Link>
						<form action={deletePost}>
							<input type='hidden' name={id} />
							<button>Delete</button>
						</form>
					</nav>
				</div>
			</article>
		</section>
	);
}
