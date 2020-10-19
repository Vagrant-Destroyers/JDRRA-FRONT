<template>
  <div class="tagcontainer">
    <div class="tagcontent">{{ technologies }}</div>
  </div>
</template>

<script>
export default {
  props: ['technologies']
}
</script>

<style>
.tagcontainer {
    height: 40px;
    border: 1px solid black;
    border-radius: 30px;
    padding: 2px 15px;
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    text-align: center;
}

.tagcircle {
    height: 15px;
    width: 15px;
    background-color: black;
    border-radius: 50%;
    margin-right: 10px;
}

.tagcontent {
    font-family: Segoe UI;
    font-size: 20px;
    font-weight: 800;
    letter-spacing: -0.034em;
    color: black;
}
</style>
