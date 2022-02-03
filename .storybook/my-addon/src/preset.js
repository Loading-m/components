function managerEntries(entry = []) {
	return [...entry, require.resolve('./register.jsx')] //👈 Addon implementation
}

module.exports = { managerEntries }
