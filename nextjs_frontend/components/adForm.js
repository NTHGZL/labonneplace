export default function AdForm () {

    return (
        <div class="flex justify-content-center">
            <form action="" method="post">
                <div class="col">
                    <div class="row">
                        <div class="flex flex-direction-column justify-content-center border-dashed padding-1rem">
                            <p align="center">Déposez vos photos ici</p>
                            <p align="center">ou</p>
                            <input type="button" value="Importer des images" />
                        </div>
                        
                    </div>
                    <div class="row">
                        <input type="text" name="title" placeholder="Titre" required />
                        
                    </div>
                    <div class="row">
                        <textarea name="description" placeholder="Description"  rows="5" cols="33" />

                    </div>
                    <div class="row">
                        <select name="category">
                            <option value="">Catégorie</option>
                            <option value="animal">animaux</option>
                            <option value="food">alimentaire</option>
                            <option value="vehicle">véhicules</option>
                            <option value="home">maison</option>
                            <option value="fashion">mode</option>
                            <option value="garden">jardinerie</option>
                            <option value="multimedia">multimédias</option>
                            <option value="services">services</option>
                            <option value="other">divers</option>
                        </select>
                        <input type="text" name="price" placeholder="Prix" required />
                    </div>
                    <div class="row">
                        <input type="submit" value="Valider" />
                    </div>
                </div>
            </form>
        </div>
    )
}