import { useSelector, shallowEqual } from 'react-redux';

export function useFetchPoolsInfo() {
	const { categories } = useSelector(
		state => ({
			categories: state.mining.categories
		}),
		shallowEqual,
	);

	return {
		categories,
	};
}