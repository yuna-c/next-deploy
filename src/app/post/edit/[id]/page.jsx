import clsx from 'clsx';
import styles from './edit.module.scss';
import { getPosts } from '@/lib/actions';

export default async function Edit({ params }) {
	const { id } = params;
	const data = await getPosts(id);

	return (
		<section className={clsx(styles.edit)}>
			<h1>edit</h1>
			{/* <p>{id}</p> */}
			<form>
				<input type='hidden' name={id} />
				<input type='text' name='title' value={data.title} />
				<input type='text' name='img' value={data.img || ''} />
				<textarea name='desc' id='' cols='30' rows='10' value={data.desc}></textarea>

				<nav>
					<input type='reset' value='cancel' />
					<input type='submit' value='update' />
				</nav>
			</form>
		</section>
	);
}
