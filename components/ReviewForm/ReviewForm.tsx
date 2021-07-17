import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
	return (
		<div className={cn(styles.reviewForm, className)} {...props}>
			<Input />
			<Input />
		</div>
	);
};
