<script>
export default {
	props: {
		value: {
			type: Array,
		},
	},

	data() {
		return {
			newTag: '',
		}
	},

	methods: {
		addTag() {
			if (this.newTag.trim().length === 0 || this.value.includes(this.newTag.trim())) {
				return
			}
			this.$emit('input', [...this.value, this.newTag.trim()])
			this.newTag = ''
		},
		removeTag(tag) {
			this.$emit('input', this.value.filter(t => t !== tag))
		},
	},

	render() {
		return this.$scopedSlots.default({
			tags: this.value,
			addTag: this.addTag,
			removeTag: this.removeTag,
			inputEvents: {
				input: e => {
					this.newTag = e.target.value
				},
				keydown: e => {
					if (e.keyCode === 13) {
						e.preventDefault()
						this.addTag()
					}
				},
			},
			inputAttrs: {
				value: this.newTag,
			},
		})
	},
}
</script>

