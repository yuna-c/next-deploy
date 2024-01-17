import clsx from 'clsx';
import styles from './write.module.scss';
import { addPost } from '@/lib/actions';

export default function Write() {
	return (
		<section className={clsx(styles.write)}>
			<h1>Write Post</h1>

			<form action={addPost}>
				<input type='text' placeholder='title' name='title' />
				<input type='text' placeholder='image URL' name='img' />
				<input type='file' />
				<textarea name='desc' id='' cols='30' rows='3' placeholder='discription'></textarea>

				<nav>
					<input type='reset' value='cancle' />
					<input type='submit' value='write' onClick={console.log('save')} />
				</nav>
			</form>
		</section>
	);
}
