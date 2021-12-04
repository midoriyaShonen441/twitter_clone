<template>
    <div id="login">
        <div id="blackSpace"></div>
        <div id="background">
            <span id="iconWhite"><i class="fab fa-twitter"></i></span>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media only screen and (max-width: 686px) {
    #blackSpace {
        display: block;
        background-color: rgb(0, 0, 0);
        width: 100%;
        height: 60vh;
    }
    #background {
        background: url("https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png");
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 40vh;
        margin: 0;
    }
}

@media only screen and (min-width: 686px) {
    #background {
        background: url("https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png");
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 55%;
        height: 100vh;
        margin: 0;
    }
    #blackSpace {
        position: absolute;
        right: 0;
        background-color: rgb(0, 0, 0);
        width: 45%;
        height: 100vh;
    }
}

#iconWhite {
    vertical-align: middle;
    text-align: center;
    font-size: 5em;
}

#iconWhite i {
    font-size: 100%;
    color: white;
}

h1 {
    font-size: 1em;
}
</style>
