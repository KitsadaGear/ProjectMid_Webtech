<template> 
<div class="shadow-lg p-3 mb-5 bg-white rounded">
    <div class="text-center">
        <h1>เกี่ยวกับเรา</h1>
    </div>

   <div class="shadow-lg p-3 mb-5 bg-white rounded ">
        <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="1024"
            img-height="480">
    
            <b-carousel-slide
            caption="First slide"
            img-src="https://picsum.photos/1024/480/?image=10">
            </b-carousel-slide>

            <b-carousel-slide
            caption="Second Slide"
            img-src="https://picsum.photos/1024/480/?image=12">
            </b-carousel-slide>

            <b-carousel-slide
            caption="Third Slide"
            img-src="https://picsum.photos/1024/480/?image=22">
            </b-carousel-slide>
        </b-carousel>
    </div>


    <div class="mt-4">
        <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
            <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
        </b-card>
        
        <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
            <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
        </b-card>
    </div>

    
    


    


</div>

</template>

<script>
export default {};
</script>

<style></style>
