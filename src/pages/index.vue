<template>
    <div class='input-tags--container'>
        <h1>布局1</h1>
        <input-tags v-model="tags">
            <div slot-scope="{tags,inputEvents,inputAttrs,removeTag,addTag}" class="input-tags-wrap">
                <span class="tag" v-for="(tag,index) in tags" :key="index">
                    <span>{{tag}}</span>
                    <button @click="removeTag(tag)">&times;</button>
                </span>
                <input type="text" class="tag_input" placeholder="Add tag..." v-on="inputEvents" v-bind="inputAttrs">
            </div>

        </input-tags>

        <h1>布局2</h1>
        <input-tags v-model="tags">
            <div slot-scope="{tags,inputEvents,inputAttrs,removeTag,addTag}" class="input-tags-wrap--two">
                <div class="tag_list--container">
                    <div class="tag_input--wrap">
                        <input type="text" class="tag_input--two" placeholder="Add tag..." v-on="inputEvents" v-bind="inputAttrs">
                        <button type="button" class="tag_input--button" @click="addTag">添加</button>
                    </div>
                    <div v-for="(tag,index) in tags" :key="index" class="tag--wrap">
                        <span>{{index+1}}： {{tag}}</span>
                        <button class="" @click="removeTag(tag)">删除</button>
                    </div>
                </div>

            </div>

        </input-tags>
    </div>

</template>

<script>
import inputTags from '../components/input-tags'

export default {
	data() {
		return {
			tags: ['test1', 'test2'],
		}
	},
	components: {
		'input-tags': inputTags,
	},
}
</script>

<style lang='less'>
@import url(./index.less);
</style>
