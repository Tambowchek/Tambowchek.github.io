/* ИЗБРАННОЕ*/
document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce2').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce4').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce5').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce6').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce7').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce8').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce9').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce10').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce11').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce12').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce13').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce14').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce15').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce16').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce17').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce18').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce19').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce20').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce21').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce22').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce23').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce1-1').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce1-2').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce1-3').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });



  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce1-4').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce1-5').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce1-6').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce1-7').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce1-8').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce1-9').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce1-10').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce1-11').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce1-12').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce1-13').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce1-14').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce1-15').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });



  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce2-1').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce2-2').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce2-3').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce2-4').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce2-5').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce2-6').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce2-7').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce2-8').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });



  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce2-9').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce2-10').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });



  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce2-11').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce2-12').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });



  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce2-13').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });



  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce2-14').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce2-15').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce3-1').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce3-2').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce3-3').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce3-4').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce3-5').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });



  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce3-6').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });



  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce3-7').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce3-8').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });



  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce3-9').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce3-10').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce3-11').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce3-12').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });



  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce3-13').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce3-14').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });



  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce3-15').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce4-1').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce4-2').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce4-3').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });



  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce4-4').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce4-5').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce4-6').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce4-7').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce4-8').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce4-9').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    document.querySelectorAll('.serdce4-10').forEach(btn => {
      const productId = btn.dataset.id;
  
      // Отметить как избранное, если уже в списке
      if (favorites.includes(productId)) {
        btn.querySelector('img').classList.add('active');
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const img = btn.querySelector('img');
        const index = favorites.indexOf(productId);

        if (index > -1) {
          favorites.splice(index, 1);
          img.classList.remove('active');
        } else {
          favorites.push(productId);
          img.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });




  document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("favorites-container");
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
    if (favorites.length === 0) {
      
      return;
    }
  
    // Загрузи список всех товаров (или создай его тут вручную)
    const allProducts = {
      "product-1": {
        name: "Freelancer P3",
        img: "img/стул 3.png",
        price: "17 993 Р"
      },
      "product-2": {
        name: "ZONE 51 PREDATOR",
        img: "img/стул1-1.png",
        price: "35 990 Р"
      },
      "product-3": {
        name: "DXRacer F - серии «Formula»",
        img: "img/стул2-2.png",
        price: "37 990 Р"
      },
      "product-4": {
        name: "Intel Extreme Masters",
        img: "img/стул4.png",
        price: "14 990 Р"
      },
      "product-5": {
        name: "KITTY MEOW EDITION",
        img: "img/стул5.png",
        price: "26 990 Р"
      },
      "product-6": {
        name: "Игровая софа RIDER",
        img: "img/стул6 (2).png",
        price: "26 990 Р"
      },
      "product-7": {
        name: "ZONE FROST",
        img: "img/стул7.png",
        price: "20 243 Р"
      },
      "product-8": {
        name: "Aerocool Ac120 Red",
        img: "img/стул 8.png",
        price: "16 000 Р"
      },
      "product-9": {
        name: "Razer Iskur - Black / Green - XL",
        img: "img/стул 9.png",
        price: "50 000 Р"
      },
      "product-10": {
        name: "Razer Enki X",
        img: "img/стул 10.png",
        price: "28 199 Р"
      },
      "product-11": {
        name: "Razer Iskur X - Black Green - XL",
        img: "img/стул 11.png",
        price: "37 299 Р"
      },
      "product-12": {
        name: "Aorus AGC300 V2 Black",
        img: "img/стул 12.png",
        price: "27 840 Р"
      },
      "product-13": {
        name: "DXRacer R - серии “Racing”",
        img: "img/стул 13.png",
        price: "15 840 Р"
      },
      "product-14": {
        name: "Razer Enki, Quartz",
        img: "img/стул 14.png",
        price: "33 193 Р"
      },
      "product-15": {
        name: "FROST RGB",
        img: "img/стул 15.png",
        price: "28 990 Р"
      },
      "product-16": {
        name: "INVADER X-Weave",
        img: "img/стул 16.png",
        price: "28 990 Р"
      },
      "product-17": {
        name: "Cougar Outrider S Royal",
        img: "img/стул 17.png",
        price: "29 840 Р"
      },
      "product-18": {
        name: "Cougar Fortress Royal",
        img: "img/стул 18.png",
        price: "23 990 Р"
      },
      "product-19": {
        name: "Cougar Fortress White",
        img: "img/стул 19.png",
        price: "22 990 Р"
      },
      "product-20": {
        name: "Razer Fujin Pro",
        img: "img/стул 20.png",
        price: "129 999 Р"
      },
      "product-21": {
        name: "Cougar Fortress Purple",
        img: "img/стул 21.png",
        price: "22 990 Р"
      },
      "product-22": {
        name: "ARMADA Royal",
        img: "img/стул 22.png",
        price: "30 000 Р"
      },
      "product-23": {
        name: "Cougar NxSys Aero Orange",
        img: "img/стул 23.png",
        price: "49 990 Р"
      },
      "product-24": {
        name: "Razer Kraken Kitty V2 Black",
        img: "img/наушники 1.png",
        price: "10 999 Р"
      },
      "product-25": {
        name: "ZONA51 RIGEL",
        img: "img/наушники 2.png",
        price: "3 990 Р"
      },
      "product-26": {
        name: "Razer Kraken X Lite",
        img: "img/наушники 3.png",
        price: "3 999 Р"
      },
      "product-27": {
        name: "ZONA51 QUASAR",
        img: "img/наушники 4.png",
        price: "2 890 Р"
      },
      "product-28": {
        name: "Razer Kaira Pro for Xbox - Halo Infinite",
        img: "img/наушники 5.png",
        price: "20 899 Р"
      },
      "product-29": {
        name: "ZONA51 STASIS",
        img: "img/наушники 6.png",
        price: "2 990 Р"
      },
      "product-30": {
        name: "Logitech G430",
        img: "img/наушники 7.png",
        price: "5 673 Р"
      },
      "product-31": {
        name: "Logitech G533 Wireless",
        img: "img/наушники 8.png",
        price: "7 200 Р"
      },
      "product-32": {
        name: "Razer BlackShark V2 X Black",
        img: "img/наушники 9.png",
        price: "6 299 Р"
      },
      "product-33": {
        name: "Razer Kraken V4 Pro",
        img: "img/наушники 10.png",
        price: "45 900 Р"
      },
      "product-34": {
        name: "Razer Kraken Kitty V2 Pro Black",
        img: "img/наушники 11.png",
        price: "21 999 Р"
      },
      "product-35": {
        name: "Razer Kraken Kitty V2 Pro Quartz",
        img: "img/наушники 12.png",
        price: "21 999 Р"
      },
      "product-36": {
        name: "ZONA51 ECLIPSE",
        img: "img/наушники 13.png",
        price: "2 990 Р"
      },
      "product-37": {
        name: "Razer Hammerhead HyperSpeed PlayStation Licensed",
        img: "img/наушники 14.png",
        price: "13 779 Р"
      },
      "product-38": {
        name: "Razer Hammerhead HyperSpeed PlayStation Licensed",
        img: "img/наушники 15.png",
        price: "13 779 Р"
      },
      "product-39": {
        name: "ZONA51 ADAMANT TKL",
        img: "img/клава 1.png",
        price: "18 999 Р"
      },
      "product-40": {
        name: "Razer Huntsman V2 TKL (Red Linear Optical Switch) Quartz",
        img: "img/клава 2.png",
        price: "13 999 Р"
      },
      "product-41": {
        name: "Razer BlackWidow V4 X (Green Switch) Black",
        img: "img/клава 3.png",
        price: "11 999 Р"
      },
      "product-42": {
        name: "ZONA51 GARNET",
        img: "img/клава 4.png",
        price: "5 890 Р"
      },
      "product-43": {
        name: "Razer Huntsman Elite (Clicky Optical Switch - Purple)",
        img: "img/клава 5.png",
        price: "11 999 Р"
      },
      "product-44": {
        name: "ZONA51 CITRIN",
        img: "img/клава 6.png",
        price: "4 490 Р"
      },
      "product-45": {
        name: "HyperX Alloy Elite",
        img: "img/клава 7.png",
        price: "9 499 Р"
      },
      "product-46": {
        name: "Logitech Gaming Pro",
        img: "img/клава 8.png",
        price: "10 000 Р"
      },
      "product-47": {
        name: "COUGAR Attack X3 RGB",
        img: "img/клава 9.png",
        price: "6 490 Р"
      },
      "product-48": {
        name: "SteelSeries Apex M500",
        img: "img/клава 10.png",
        price: "5 990 Р"
      },
      "product-49": {
        name: "Zalman ZM-K900M",
        img: "img/клава 11.png",
        price: "3 000 Р"
      },
      "product-50": {
        name: "Razer Ornata V3 X",
        img: "img/клава 12.png",
        price: "3 990 Р"
      },
      "product-51": {
        name: "Corsair Gaming K70 RGB",
        img: "img/клава 13.png",
        price: "7 490 Р"
      },
      "product-52": {
        name: "Razer Huntsman Mini (Red, Linear Optical  Switch), Black",
        img: "img/клава 14.png",
        price: "4 500 Р"
      },
      "product-53": {
        name: "Razer Ornata V3",
        img: "img/клава 15.png",
        price: "4 500 Р"
      },
      "product-54": {
        name: "Razer DeathAdder V3 Pro White",
        img: "img/мышка 1.png",
        price: "10 900 Р"
      },
      "product-55": {
        name: "Logitech G403 Prodigy",
        img: "img/мышка 2.png",
        price: "5 100 Р"
      },
      "product-56": {
        name: "Bloody A60",
        img: "img/мышка 3.png",
        price: "1 999 Р"
      },
      "product-57": {
        name: "ZONA51 THETA",
        img: "img/мышка 4.png",
        price: "1 900 Р"
      },
      "product-58": {
        name: "Razer Basilisk V3 35K",
        img: "img/мышка 5.png",
        price: "6 300 Р"
      },
      "product-59": {
        name: "Bloody A90",
        img: "img/мышка 6.png",
        price: "1 990 Р"
      },
      "product-60": {
        name: "COUGAR Revenger S",
        img: "img/мышка 7.png",
        price: "10 000 Р"
      },
      "product-61": {
        name: "Razer Orochi V2, White",
        img: "img/мышка 8.png",
        price: "4 600 Р"
      },
      "product-62": {
        name: "Razer DeathAdder V3 Pro Faker Edition",
        img: "img/мышка 9.png",
        price: "14 400 Р"
      },
      "product-63": {
        name: "Razer Viper V2 Pro, PUBG: BATTLEGROUNDS Edition",
        img: "img/мышка 10.png",
        price: "12 500 Р"
      },
      "product-64": {
        name: "Razer Basilisk V3 Pro White",
        img: "img/мышка 11.png",
        price: "11 500 Р"
      },
      "product-65": {
        name: "Razer Viper Mini Signature Edition",
        img: "img/мышка 12.png",
        price: "20 100 Р"
      },
      "product-66": {
        name: "COUGAR Minos X1",
        img: "img/мышка 13.png",
        price: "3 900 Р"
      },
      "product-67": {
        name: "Razer Cobra Pro Black",
        img: "img/мышка 14.png",
        price: "9 900 Р"
      },
      "product-68": {
        name: "Razer Cobra Pro White",
        img: "img/мышка 15.png",
        price: "9 900 Р"
      },
      "product-69": {
        name: "PLATFORM AMBILIGHT 160",
        img: "img/столик 1.png",
        price: "24 990 Р"
      },
      "product-70": {
        name: "DXRacer GD/1000/NR",
        img: "img/столик 2.png",
        price: "24 990 Р"
      },
      "product-71": {
        name: "Trine RGB Wood",
        img: "img/столик 3.png",
        price: "14 790 Р"
      },
      "product-72": {
        name: "e-Platform Black",
        img: "img/столик 4.png",
        price: "14 290 Р"
      },
      "product-73": {
        name: "DXRacer GD/1000/NR",
        img: "img/столик 5.png",
        price: "24 990 Р"
      },
      "product-74": {
        name: "RUNWAY WHITE",
        img: "img/столик 6.png",
        price: "20 100 Р"
      },
      "product-75": {
        name: "e-Platform Wood",
        img: "img/столик 7.png",
        price: "20 100 Р"
      },
      "product-76": {
        name: "Platform Pro 120",
        img: "img/столик 8.png",
        price: "23 990 Р"
      },
      "product-77": {
        name: "Trine",
        img: "img/столик 9.png",
        price: "9 900 Р"
      },
      "product-78": {
        name: "e-Platform White",
        img: "img/столик 10.png",
        price: "17 900 Р"
      },
      

      // Добавь остальные товары по такому же принципу
    };
  
    // Формируем HTML для избранных
    favorites.forEach(id => {
        const product = allProducts[id];
        if (product) {
          const div = document.createElement("div");
          div.className = "favorite-product";
          div.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <div class="button-group">
              <button onclick="removeFromFavorites('${id}')">Удалить</button>
              <button class="buy-button" onclick="addToCart('${id}')">Купить</button>
            </div>
          `;
          container.appendChild(div);
        }
      });
  });
  
  // Удаление товара из избранного
  function removeFromFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter(fav => fav !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    location.reload(); // перезагрузим страницу
  }
  /**------------------------------------------------------------------------------------------КОРЗИГА */

  function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.includes(id)) {
      cart.push(id);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Товар добавлен в корзину!");
    } else {
      alert("Товар уже в корзине.");
    }
  }

   
  const allProducts = {
    "product-1": {
      name: "Freelancer P3",
      img: "img/стул 3.png",
      price: "17 993 Р"
    },
    "product-2": {
      name: "ZONE 51 PREDATOR",
      img: "img/стул1-1.png",
      price: "35 990 Р"
    },
    "product-3": {
      name: "DXRacer F - серии «Formula»",
      img: "img/стул2-2.png",
      price: "37 990 Р"
    },
    "product-4": {
        name: "Intel Extreme Masters",
        img: "img/стул4.png",
        price: "14 990 Р"
      },
      "product-5": {
        name: "KITTY MEOW EDITION",
        img: "img/стул5.png",
        price: "26 990 Р"
      },
      "product-6": {
        name: "Игровая софа RIDER",
        img: "img/стул6 (2).png",
        price: "26 990 Р"
      },
      "product-7": {
        name: "ZONE FROST",
        img: "img/стул7.png",
        price: "20 243 Р"
      },
      "product-8": {
        name: "Aerocool Ac120 Red",
        img: "img/стул 8.png",
        price: "16 000 Р"
      },
      "product-9": {
        name: "Razer Iskur - Black / Green - XL",
        img: "img/стул 9.png",
        price: "50 000 Р"
      },
      "product-10": {
        name: "Razer Enki X",
        img: "img/стул 10.png",
        price: "28 199 Р"
      },
      "product-11": {
        name: "Razer Iskur X - Black Green - XL",
        img: "img/стул 11.png",
        price: "37 299 Р"
      },
      "product-12": {
        name: "Aorus AGC300 V2 Black",
        img: "img/стул 12.png",
        price: "27 840 Р"
      },
      "product-13": {
        name: "DXRacer R - серии “Racing”",
        img: "img/стул 13.png",
        price: "15 840 Р"
      },
      "product-14": {
        name: "Razer Enki, Quartz",
        img: "img/стул 14.png",
        price: "33 193 Р"
      },
      "product-15": {
        name: "FROST RGB",
        img: "img/стул 15.png",
        price: "28 990 Р"
      },
      "product-16": {
        name: "INVADER X-Weave",
        img: "img/стул 16.png",
        price: "28 990 Р"
      },
      "product-17": {
        name: "Cougar Outrider S Royal",
        img: "img/стул 17.png",
        price: "29 840 Р"
      },
      "product-18": {
        name: "Cougar Fortress Royal",
        img: "img/стул 18.png",
        price: "23 990 Р"
      },
      "product-19": {
        name: "Cougar Fortress White",
        img: "img/стул 19.png",
        price: "22 990 Р"
      },
      "product-20": {
        name: "Razer Fujin Pro",
        img: "img/стул 20.png",
        price: "129 999 Р"
      },
      "product-21": {
        name: "Cougar Fortress Purple",
        img: "img/стул 21.png",
        price: "22 990 Р"
      },
      "product-22": {
        name: "ARMADA Royal",
        img: "img/стул 22.png",
        price: "30 000 Р"
      },
      "product-23": {
        name: "Cougar NxSys Aero Orange",
        img: "img/стул 23.png",
        price: "49 990 Р"
      },
      "product-24": {
        name: "Razer Kraken Kitty V2 Black",
        img: "img/наушники 1.png",
        price: "10 999 Р"
      },
      "product-25": {
        name: "ZONA51 RIGEL",
        img: "img/наушники 2.png",
        price: "3 990 Р"
      },
      "product-26": {
        name: "Razer Kraken X Lite",
        img: "img/наушники 3.png",
        price: "3 999 Р"
      },
      "product-27": {
        name: "ZONA51 QUASAR",
        img: "img/наушники 4.png",
        price: "2 890 Р"
      },
      "product-28": {
        name: "Razer Kaira Pro for Xbox - Halo Infinite",
        img: "img/наушники 5.png",
        price: "20 899 Р"
      },
      "product-29": {
        name: "ZONA51 STASIS",
        img: "img/наушники 6.png",
        price: "2 990 Р"
      },
      "product-30": {
        name: "Logitech G430",
        img: "img/наушники 7.png",
        price: "5 673 Р"
      },
      "product-31": {
        name: "Logitech G533 Wireless",
        img: "img/наушники 8.png",
        price: "7 200 Р"
      },
      "product-32": {
        name: "Razer BlackShark V2 X Black",
        img: "img/наушники 9.png",
        price: "6 299 Р"
      },
      "product-33": {
        name: "Razer Kraken V4 Pro",
        img: "img/наушники 10.png",
        price: "45 900 Р"
      },
      "product-34": {
        name: "Razer Kraken Kitty V2 Pro Black",
        img: "img/наушники 11.png",
        price: "21 999 Р"
      },
      "product-35": {
        name: "Razer Kraken Kitty V2 Pro Quartz",
        img: "img/наушники 12.png",
        price: "21 999 Р"
      },
      "product-36": {
        name: "ZONA51 ECLIPSE",
        img: "img/наушники 13.png",
        price: "2 990 Р"
      },
      "product-37": {
        name: "Razer Hammerhead HyperSpeed PlayStation Licensed",
        img: "img/наушники 14.png",
        price: "13 779 Р"
      },
      "product-38": {
        name: "Razer Hammerhead HyperSpeed PlayStation Licensed",
        img: "img/наушники 15.png",
        price: "13 779 Р"
      },
      "product-39": {
        name: "ZONA51 ADAMANT TKL",
        img: "img/клава 1.png",
        price: "18 999 Р"
      },
      "product-40": {
        name: "Razer Huntsman V2 TKL (Red Linear Optical Switch) Quartz",
        img: "img/клава 2.png",
        price: "13 999 Р"
      },
      "product-41": {
        name: "Razer BlackWidow V4 X (Green Switch) Black",
        img: "img/клава 3.png",
        price: "11 999 Р"
      },
      "product-42": {
        name: "ZONA51 GARNET",
        img: "img/клава 4.png",
        price: "5 890 Р"
      },
      "product-43": {
        name: "Razer Huntsman Elite (Clicky Optical Switch - Purple)",
        img: "img/клава 5.png",
        price: "11 999 Р"
      },
      "product-44": {
        name: "ZONA51 CITRIN",
        img: "img/клава 6.png",
        price: "4 490 Р"
      },
      "product-45": {
        name: "HyperX Alloy Elite",
        img: "img/клава 7.png",
        price: "9 499 Р"
      },
      "product-46": {
        name: "Logitech Gaming Pro",
        img: "img/клава 8.png",
        price: "10 000 Р"
      },
      "product-47": {
        name: "COUGAR Attack X3 RGB",
        img: "img/клава 9.png",
        price: "6 490 Р"
      },
      "product-48": {
        name: "SteelSeries Apex M500",
        img: "img/клава 10.png",
        price: "5 990 Р"
      },
      "product-49": {
        name: "Zalman ZM-K900M",
        img: "img/клава 11.png",
        price: "3 000 Р"
      },
      "product-50": {
        name: "Razer Ornata V3 X",
        img: "img/клава 12.png",
        price: "3 990 Р"
      },
      "product-51": {
        name: "Corsair Gaming K70 RGB",
        img: "img/клава 13.png",
        price: "7 490 Р"
      },
      "product-52": {
        name: "Razer Huntsman Mini (Red, Linear Optical  Switch), Black",
        img: "img/клава 14.png",
        price: "4 500 Р"
      },
      "product-53": {
        name: "Razer Ornata V3",
        img: "img/клава 15.png",
        price: "4 500 Р"
      },
      "product-54": {
        name: "Razer DeathAdder V3 Pro White",
        img: "img/мышка 1.png",
        price: "10 900 Р"
      },
      "product-55": {
        name: "Logitech G403 Prodigy",
        img: "img/мышка 2.png",
        price: "5 100 Р"
      },
      "product-56": {
        name: "Bloody A60",
        img: "img/мышка 3.png",
        price: "1 999 Р"
      },
      "product-57": {
        name: "ZONA51 THETA",
        img: "img/мышка 4.png",
        price: "1 900 Р"
      },
      "product-58": {
        name: "Razer Basilisk V3 35K",
        img: "img/мышка 5.png",
        price: "6 300 Р"
      },
      "product-59": {
        name: "Bloody A90",
        img: "img/мышка 6.png",
        price: "1 990 Р"
      },
      "product-60": {
        name: "COUGAR Revenger S",
        img: "img/мышка 7.png",
        price: "10 000 Р"
      },
      "product-61": {
        name: "Razer Orochi V2, White",
        img: "img/мышка 8.png",
        price: "4 600 Р"
      },
      "product-62": {
        name: "Razer DeathAdder V3 Pro Faker Edition",
        img: "img/мышка 9.png",
        price: "14 400 Р"
      },
      "product-63": {
        name: "Razer Viper V2 Pro, PUBG: BATTLEGROUNDS Edition",
        img: "img/мышка 10.png",
        price: "12 500 Р"
      },
      "product-64": {
        name: "Razer Basilisk V3 Pro White",
        img: "img/мышка 11.png",
        price: "11 500 Р"
      },
      "product-65": {
        name: "Razer Viper Mini Signature Edition",
        img: "img/мышка 12.png",
        price: "20 100 Р"
      },
      "product-66": {
        name: "COUGAR Minos X1",
        img: "img/мышка 13.png",
        price: "3 900 Р"
      },
      "product-67": {
        name: "Razer Cobra Pro Black",
        img: "img/мышка 14.png",
        price: "9 900 Р"
      },
      "product-68": {
        name: "Razer Cobra Pro White",
        img: "img/мышка 15.png",
        price: "9 900 Р"
      },
      "product-69": {
        name: "PLATFORM AMBILIGHT 160",
        img: "img/столик 1.png",
        price: "24 990 Р"
      },
      "product-70": {
        name: "DXRacer GD/1000/NR",
        img: "img/столик 2.png",
        price: "24 990 Р"
      },
      "product-71": {
        name: "Trine RGB Wood",
        img: "img/столик 3.png",
        price: "14 790 Р"
      },
      "product-72": {
        name: "e-Platform Black",
        img: "img/столик 4.png",
        price: "14 290 Р"
      },
      "product-73": {
        name: "DXRacer GD/1000/NR",
        img: "img/столик 5.png",
        price: "24 990 Р"
      },
      "product-74": {
        name: "RUNWAY WHITE",
        img: "img/столик 6.png",
        price: "20 100 Р"
      },
      "product-75": {
        name: "e-Platform Wood",
        img: "img/столик 7.png",
        price: "20 100 Р"
      },
      "product-76": {
        name: "Platform Pro 120",
        img: "img/столик 8.png",
        price: "23 990 Р"
      },
      "product-77": {
        name: "Trine",
        img: "img/столик 9.png",
        price: "9 900 Р"
      },
      "product-78": {
        name: "e-Platform White",
        img: "img/столик 10.png",
        price: "17 900 Р"
      },
  };
  
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-container");
  
  if (cart.length === 0) {
    container.innerHTML = "<p>Корзина пуста</p>";
  } else {
    cart.forEach(id => {
      const product = allProducts[id];
      if (product) {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
          <img src="${product.img}" alt="${product.name}">
          <div>
            <h2>${product.name}</h2>
            <p>${product.price}</p>
          </div>
          <button class="remove-button" onclick="removeFromCart('${id}')">Удалить</button>
          <button class="buy-button-final" onclick="checkout()">Купить</button>
        `;
        container.appendChild(div);
      }
    });
  }

    function removeFromCart(id) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart = cart.filter(item => item !== id);
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload();
    }


    /*----------------окно при покупке*/

    const DELIVERY_COST = 450;

function checkout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Корзина пуста!");
    return;
  }
  calculateTotal(); // Пересчитываем итоговую сумму перед открытием модального окна
  document.getElementById("checkout-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("checkout-modal").style.display = "none";
}

// Функция для переключения полей в зависимости от метода оплаты
function toggleSBP() {
  const method = document.getElementById("payment-method").value;
  const cardFields = document.getElementById("card-fields");
  const sbpInfo = document.getElementById("sbp-info");

  if (method === "sbp") {
    cardFields.style.display = "none";
    sbpInfo.style.display = "block";
  } else {
    cardFields.style.display = "block";
    sbpInfo.style.display = "none";
  }
}

// Подсчет итоговой суммы с доставкой
function calculateTotal() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  // Подсчитываем стоимость товаров
  cart.forEach(id => {
    const product = allProducts[id];
    if (product) {
      const price = parseInt(product.price.replace(/\D/g, "")); // Убираем всё, что не число
      total += price;
    }
  });

  total += DELIVERY_COST; // Добавляем стоимость доставки

  // Обновляем элемент с итоговой суммой
  const totalAmountEl = document.getElementById("total-amount");
  if (totalAmountEl) {
    totalAmountEl.textContent = `${total.toLocaleString()} ₽`;
  } else {
    console.warn("Элемент #total-amount не найден в DOM");
  }
}

// Обработчик подтверждения оформления заказа
function confirmCheckout() {
  const name = document.getElementById("customer-name").value;
  const address = document.getElementById("delivery-address").value;
  const method = document.getElementById("payment-method").value;
  const cardNumber = document.getElementById("card-number").value;

  if (!name || !address) {
    alert("Пожалуйста, заполните все поля.");
    return;
  }

  if (method === "card" && !/^\d{16}$/.test(cardNumber)) {
    alert("Введите корректный номер карты (16 цифр).");
    return;
  }

  alert(`Спасибо за заказ, ${name}!\nАдрес доставки: ${address}\nСпособ оплаты: ${method === "card" ? "банковская карта" : "СБП (QR-код)"}\nДоставка: 450 ₽ включена.`);

  localStorage.removeItem("cart");
  closeModal();
  location.reload();
}
