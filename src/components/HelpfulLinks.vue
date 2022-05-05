 <template>
    <div class="container-fluid">
        <!--Welcome Title -->
        <div class="row align-items-center justify-content-center">
            <div class="col col-12 align-items-center justify-content-center">
                <blockquote>
                    <h3>Useful Links to help you POE better!</h3>
                </blockquote>
            </div>
        </div>



        <!-- Data table -->
        <div class="row align-items-center justify-content-center">
            <div class="col col-12 col-md-10 d-none d-xl-block d-lg-block d-md-block">
                <table class="table table-hover" style="overflow-y: auto"
                       :headers="headers">
                    <thead>
                    <tr>
                        <th scope="col">Link</th>
                        <th scope="col">Description</th>
                    </tr>
                    <tr>
                        <td><a href="https://www.filterblade.xyz/">Filterblade</a></td>
                        <td>Create a loot filter and never pick up another useless item again!</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.poelab.com/">POElab</a></td>
                        <td>Find the fastest route through labryinths and get your ascendencies!</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.pathofexile.com/trade/">POE Trade</a></td>
                        <td>Upgrade your gear or sell what you have!</td>
                    </tr>
                    <tr>
                        <td><a href="https://poe.ninja/">Poe.ninja</a></td>
                        <td>See what the top builds are this league and much more!</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.reddit.com/r/pathofexile/">Poe Subreddit</a></td>
                        <td>Complain about Chris Wilson and GGG!</td>
                    </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>






</template>