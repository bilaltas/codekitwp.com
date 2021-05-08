export const state = () => ({
	isMenuOpen: false
});

export const mutations = {
	setMenu(state, status = false) {
		state.isMenuOpen = status;
	}
};
