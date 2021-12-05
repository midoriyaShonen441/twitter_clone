<template>
    <div id="login">
        <div id="blackSpace">
            <div class="paragraph">
                <span id="iconBlue"><i class="fab fa-twitter"></i></span>
                <h1>
                    Happening now
                </h1>
                <h2>
                    Join Twitter today.
                </h2>
            </div>
            <div class="buttonSpace">
                <button>Sign Up</button>
                <div id='ruler'>
                    <div id='line'></div>
                    <span>or</span>
                    <span id='line'></span>
                </div>
                <button>Login</button>
            </div>
        </div>
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
    .paragraph {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        justify-items: center;
        margin-left: 1em;

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
    .paragraph {
        margin: 1em;
        margin-right: 0;
    }

    .buttonSpace{
        margin: 2.5em 0;
    }


}

#iconBlue i{
    color: #1DA1F2
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

    #blackSpace h1{
    font-size: 100%;
    color: white;
}

    #blackSpace h2{
    font-size: 50%;
    margin-top: 0;
    color: white;
}

.buttonSpace {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#ruler {
    display: flex;
    justify-content: center;
    justify-items: center;
    flex-basis: auto;
    font-size: 18px;
    width: 80%;
    margin: 1em;
    color: white
}

#line {
    width: 10em;
    height: 1em;
    border-top: 1px solid white;
    position: relative;
    top: 0.8em;
    margin: 0 1em;
}

</style>