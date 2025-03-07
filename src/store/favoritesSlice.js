export const createFavoritesSlice = (set, get) => ({
    // Estado inicial: una lista vacía de favoritos
    favorites: [],

    // Función para verificar si una receta ya está en favoritos
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink == id);
    },

    // Maneja el clic en el botón de favorito (agregar o eliminar)
    handleClickFavorite: (recipe) => {
        const { favoriteExists, addNotification } = get();

        if (favoriteExists(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }));
            addNotification("Bebida eliminada de favoritos", "info");
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }));
            addNotification("Bebida agregada a favoritos", "success");
        }

        localStorage.setItem('favorites', JSON.stringify(get().favorites));
    },

    // Carga la lista de favoritos desde localStorage al iniciar la aplicación
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites)
            });
        }
    }
});
