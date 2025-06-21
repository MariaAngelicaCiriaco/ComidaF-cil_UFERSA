// script.js

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Simulação de autenticação
            if (email === "aluno@ufersa.edu.br" && password === "123") {
                alert("Login de Aluno/Professor bem-sucedido!");
                window.location.href = "dashboard_user.html";
            } else if (email === "admin@restaurante.com" && password === "admin123") {
                alert("Login de Administrador bem-sucedido!");
                window.location.href = "dashboard_admin.html";
            } else {
                alert("E-mail ou senha incorretos.");
            }
        });
    }

    // Lógica para o dashboard do usuário
    const menuItemsContainer = document.getElementById("menu-items");
    const orderList = document.getElementById("order-list");
    const placeOrderBtn = document.getElementById("place-order-btn");
    const statusText = document.getElementById("status-text");
    const restaurantSelect = document.getElementById("restaurant-select");

    const menuData = [
        {
            id: 1,
            name: "Prato Feito - Carne",
            description: "Arroz, feijão, carne moída, salada",
            price: 12.00,
            category: "refeicoes",
            restaurant: "ru_central"
        },
        {
            id: 2,
            name: "Prato Feito - Frango",
            description: "Arroz, feijão, frango grelhado, salada",
            price: 11.00,
            category: "refeicoes",
            restaurant: "ru_central"
        },
        {
            id: 3,
            name: "Suco de Laranja",
            description: "Suco natural de laranja 300ml",
            price: 4.00,
            category: "bebidas",
            restaurant: "ru_central"
        },
        {
            id: 4,
            name: "Coxinha de Frango",
            description: "Coxinha de frango com catupiry",
            price: 6.00,
            category: "salgados",
            restaurant: "cantina_ccsa"
        },
        {
            id: 5,
            name: "Refrigerante Lata",
            description: "Coca-cola, Guaraná, Sprite",
            price: 5.00,
            category: "bebidas",
            restaurant: "cantina_ccsa"
        }
    ];

    let currentOrder = [];

    function renderMenuItems(filterRestaurant = "all") {
        if (!menuItemsContainer) return;

        menuItemsContainer.innerHTML = "";
        const filteredMenu = menuData.filter(item => 
            filterRestaurant === "all" || item.restaurant === filterRestaurant
        );

        filteredMenu.forEach(item => {
            const menuItemDiv = document.createElement("div");
            menuItemDiv.classList.add("menu-item");
            menuItemDiv.innerHTML = `
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <p class="price">R$ ${item.price.toFixed(2)}</p>
                <button class="btn add-to-order" data-id="${item.id}">Adicionar</button>
            `;
            menuItemsContainer.appendChild(menuItemDiv);
        });

        document.querySelectorAll(".add-to-order").forEach(button => {
            button.addEventListener("click", (e) => {
                const itemId = parseInt(e.target.dataset.id);
                const selectedItem = menuData.find(item => item.id === itemId);
                if (selectedItem) {
                    currentOrder.push(selectedItem);
                    renderOrderList();
                }
            });
        });
    }

    function renderOrderList() {
        if (!orderList) return;

        orderList.innerHTML = "";
        currentOrder.forEach((item, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                ${item.name} - R$ ${item.price.toFixed(2)}
                <button class="remove-item" data-index="${index}">Remover</button>
            `;
            orderList.appendChild(listItem);
        });

        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", (e) => {
                const itemIndex = parseInt(e.target.dataset.index);
                currentOrder.splice(itemIndex, 1);
                renderOrderList();
            });
        });
    }

    if (placeOrderBtn) {
        placeOrderBtn.addEventListener("click", () => {
            if (currentOrder.length === 0) {
                alert("Seu pedido está vazio!");
                return;
            }
            const observations = document.getElementById("order-observations").value;
            const orderSummary = currentOrder.map(item => item.name).join(", ");
            alert(`Pedido realizado com sucesso!\nItens: ${orderSummary}\nObservações: ${observations || "Nenhuma"}\n\nSimulando status: Recebido.`);
            statusText.textContent = "Recebido";
            currentOrder = []; // Limpa o pedido após "enviar"
            renderOrderList();
            document.getElementById("order-observations").value = "";

            // Simulação de mudança de status
            setTimeout(() => {
                statusText.textContent = "Em preparo";
            }, 5000);
            setTimeout(() => {
                statusText.textContent = "Pronto para retirada";
            }, 10000);
        });
    }

    if (restaurantSelect) {
        restaurantSelect.addEventListener("change", (e) => {
            renderMenuItems(e.target.value);
        });
    }

    // Renderiza os itens do cardápio e o pedido inicial se estiver no dashboard do usuário
    if (menuItemsContainer && orderList) {
        renderMenuItems();
        renderOrderList();
    }

    // Lógica para o dashboard do administrador (simulada)
    const adminMenuItemsContainer = document.getElementById("admin-menu-items");
    const currentOrdersContainer = document.getElementById("current-orders");

    function renderAdminMenuItems() {
        if (!adminMenuItemsContainer) return;

        adminMenuItemsContainer.innerHTML = "";
        menuData.forEach(item => {
            const adminMenuItemDiv = document.createElement("div");
            adminMenuItemDiv.classList.add("admin-menu-item");
            adminMenuItemDiv.innerHTML = `
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p>${item.description}</p>
                    <p>R$ ${item.price.toFixed(2)}</p>
                </div>
                <div class="item-actions">
                    <button class="btn edit-item" data-id="${item.id}">Editar</button>
                    <button class="btn remove-item" data-id="${item.id}">Remover</button>
                </div>
            `;
            adminMenuItemsContainer.appendChild(adminMenuItemDiv);
        });
    }

    const adminOrders = [
        {
            id: "ORD001",
            user: "aluno@ufersa.edu.br",
            items: ["Prato Feito - Carne", "Suco de Laranja"],
            status: "Recebido",
            observations: "Sem cebola no prato"
        },
        {
            id: "ORD002",
            user: "professor@ufersa.edu.br",
            items: ["Coxinha de Frango", "Refrigerante Lata"],
            status: "Em preparo",
            observations: "Bebida gelada"
        }
    ];

    function renderCurrentOrders() {
        if (!currentOrdersContainer) return;

        currentOrdersContainer.innerHTML = "";
        adminOrders.forEach(order => {
            const orderCard = document.createElement("div");
            orderCard.classList.add("order-card");
            orderCard.innerHTML = `
                <h4>Pedido #${order.id}</h4>
                <p>Usuário: ${order.user}</p>
                <p>Itens: ${order.items.join(", ")}</p>
                <p>Status: <strong>${order.status}</strong></p>
                <p>Observações: ${order.observations || "Nenhuma"}</p>
                <button class="btn status-update-btn" data-id="${order.id}" data-current-status="${order.status}">Atualizar Status</button>
            `;
            currentOrdersContainer.appendChild(orderCard);
        });

        document.querySelectorAll(".status-update-btn").forEach(button => {
            button.addEventListener("click", (e) => {
                const orderId = e.target.dataset.id;
                let currentStatus = e.target.dataset.currentStatus;
                let newStatus;

                if (currentStatus === "Recebido") {
                    newStatus = "Em preparo";
                } else if (currentStatus === "Em preparo") {
                    newStatus = "Pronto para retirada";
                } else if (currentStatus === "Pronto para retirada") {
                    newStatus = "Concluído";
                } else {
                    newStatus = "Recebido"; // Reinicia para demonstração
                }

                const orderToUpdate = adminOrders.find(order => order.id === orderId);
                if (orderToUpdate) {
                    orderToUpdate.status = newStatus;
                    e.target.dataset.currentStatus = newStatus; // Atualiza o dataset
                    renderCurrentOrders(); // Renderiza novamente para refletir a mudança
                }
            });
        });
    }

    // Renderiza os itens do cardápio e os pedidos iniciais se estiver no dashboard do administrador
    if (adminMenuItemsContainer && currentOrdersContainer) {
        renderAdminMenuItems();
        renderCurrentOrders();
    }
});


