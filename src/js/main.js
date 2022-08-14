import Burger from "./mods/Burger";
import Observer from "./mods/ScrollObserver";
import FixHeader from "./mods/FixHeader";
import ContactModal from "./mods/ContactModal";

new Burger().registerEvents();

const features = document.querySelectorAll(".sub");
new Observer(features, 120).observe();

const testimonials = document.querySelectorAll(".subs")
new Observer(testimonials, 10).observe();

new FixHeader().init();

new ContactModal().registerEvents();