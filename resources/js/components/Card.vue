<template>
    <div class="card_item">
        <img alt="" :src="item.webformatURL">
        <div class="card_item_elems">
            <div class="card_item-tags">
                {{ item.tags }}
            </div>
            <div class="card_item-user">
                {{ item.user }}
            </div>
            <div class="card_item-likes">
                {{ item.likes }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['item'],
    name: "Card",
};
</script>

<style scoped>

</style>