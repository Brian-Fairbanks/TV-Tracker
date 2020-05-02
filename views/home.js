module.exports = function() {
  return `<div class="flex-auto flex flex-col mt-8">
    <div
        class="rounded rounded-b-none m-auto w-full lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-lg container flex-auto flex py-3 bg-gray-900 border-b-2 border-teal-500 text-white">
        <h2 class="pl-5 text-lg">Trending</h2>
    </div>
    <!-- The div below defines the row for displaying info for one result -->
    <div
        class="rounded-lg rounded-t-none w-full lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-lg m-auto container flex-auto flex justify-around py-3 text-center items-center bg-gray-900 text-white">
        <div class="flex flex-col flex-auto">
            
            <div class="flex justify-around mt-4 w-full flex-wrap" id="trending"></div>
                
        </div>
    </div>

</div>
<script type="text/javascript" src="./js/homepage.js"></script>
`;
};
