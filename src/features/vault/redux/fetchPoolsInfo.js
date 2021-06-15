import { useSelector, shallowEqual } from 'react-redux';

export function useFetchPoolsInfo() {
	const { categories } = useSelector(
		state => ({
			categories: state.vault.categories
		}),
		shallowEqual,
	);

	return {
		categories,
	};
}