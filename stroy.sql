--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.8
-- Dumped by pg_dump version 9.6.8

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: auth_group; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(80) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO stroyshop;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.auth_group_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_id_seq OWNER TO stroyshop;

--
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO stroyshop;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.auth_group_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_permissions_id_seq OWNER TO stroyshop;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO stroyshop;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.auth_permission_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_permission_id_seq OWNER TO stroyshop;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;


--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO stroyshop;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.django_admin_log_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_admin_log_id_seq OWNER TO stroyshop;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO stroyshop;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.django_content_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_content_type_id_seq OWNER TO stroyshop;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO stroyshop;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.django_migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_migrations_id_seq OWNER TO stroyshop;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;


--
-- Name: django_session; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO stroyshop;

--
-- Name: main_banner; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_banner (
    id integer NOT NULL,
    "order" integer NOT NULL
);


ALTER TABLE public.main_banner OWNER TO stroyshop;

--
-- Name: main_banner_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.main_banner_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_banner_id_seq OWNER TO stroyshop;

--
-- Name: main_banner_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.main_banner_id_seq OWNED BY public.main_banner.id;


--
-- Name: main_banner_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_banner_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    slug character varying(60) NOT NULL,
    image character varying(100) NOT NULL,
    master_id integer
);


ALTER TABLE public.main_banner_translation OWNER TO stroyshop;

--
-- Name: main_banner_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.main_banner_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_banner_translation_id_seq OWNER TO stroyshop;

--
-- Name: main_banner_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.main_banner_translation_id_seq OWNED BY public.main_banner_translation.id;


--
-- Name: main_customermenu; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_customermenu (
    id integer NOT NULL,
    "order" integer NOT NULL
);


ALTER TABLE public.main_customermenu OWNER TO stroyshop;

--
-- Name: main_customermenu_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.main_customermenu_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_customermenu_id_seq OWNER TO stroyshop;

--
-- Name: main_customermenu_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.main_customermenu_id_seq OWNED BY public.main_customermenu.id;


--
-- Name: main_customermenu_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_customermenu_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    slug character varying(60) NOT NULL,
    master_id integer
);


ALTER TABLE public.main_customermenu_translation OWNER TO stroyshop;

--
-- Name: main_customermenu_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.main_customermenu_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_customermenu_translation_id_seq OWNER TO stroyshop;

--
-- Name: main_customermenu_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.main_customermenu_translation_id_seq OWNED BY public.main_customermenu_translation.id;


--
-- Name: main_customersmenu; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_customersmenu (
    menu_ptr_id integer NOT NULL
);


ALTER TABLE public.main_customersmenu OWNER TO stroyshop;

--
-- Name: main_menu; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_menu (
    id integer NOT NULL,
    "order" integer NOT NULL
);


ALTER TABLE public.main_menu OWNER TO stroyshop;

--
-- Name: main_menu_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.main_menu_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_menu_id_seq OWNER TO stroyshop;

--
-- Name: main_menu_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.main_menu_id_seq OWNED BY public.main_menu.id;


--
-- Name: main_menu_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_menu_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    slug character varying(60) NOT NULL,
    master_id integer
);


ALTER TABLE public.main_menu_translation OWNER TO stroyshop;

--
-- Name: main_menu_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.main_menu_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_menu_translation_id_seq OWNER TO stroyshop;

--
-- Name: main_menu_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.main_menu_translation_id_seq OWNED BY public.main_menu_translation.id;


--
-- Name: main_static; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_static (
    id integer NOT NULL
);


ALTER TABLE public.main_static OWNER TO stroyshop;

--
-- Name: main_static_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.main_static_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_static_id_seq OWNER TO stroyshop;

--
-- Name: main_static_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.main_static_id_seq OWNED BY public.main_static.id;


--
-- Name: main_static_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_static_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    slug character varying(60) NOT NULL,
    image character varying(100),
    body text NOT NULL,
    master_id integer
);


ALTER TABLE public.main_static_translation OWNER TO stroyshop;

--
-- Name: main_static_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.main_static_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_static_translation_id_seq OWNER TO stroyshop;

--
-- Name: main_static_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.main_static_translation_id_seq OWNED BY public.main_static_translation.id;


--
-- Name: main_usermenu; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_usermenu (
    id integer NOT NULL,
    "order" integer NOT NULL
);


ALTER TABLE public.main_usermenu OWNER TO stroyshop;

--
-- Name: main_usermenu_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.main_usermenu_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_usermenu_id_seq OWNER TO stroyshop;

--
-- Name: main_usermenu_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.main_usermenu_id_seq OWNED BY public.main_usermenu.id;


--
-- Name: main_usermenu_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_usermenu_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    slug character varying(60) NOT NULL,
    master_id integer
);


ALTER TABLE public.main_usermenu_translation OWNER TO stroyshop;

--
-- Name: main_usermenu_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.main_usermenu_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_usermenu_translation_id_seq OWNER TO stroyshop;

--
-- Name: main_usermenu_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.main_usermenu_translation_id_seq OWNED BY public.main_usermenu_translation.id;


--
-- Name: main_usersmenu; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_usersmenu (
    menu_ptr_id integer NOT NULL
);


ALTER TABLE public.main_usersmenu OWNER TO stroyshop;

--
-- Name: orders_cart; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.orders_cart (
    id integer NOT NULL,
    session_key character varying(255) NOT NULL,
    count integer NOT NULL,
    status boolean NOT NULL,
    total_price numeric(10,2) NOT NULL,
    order_id integer,
    variation_id integer NOT NULL
);


ALTER TABLE public.orders_cart OWNER TO stroyshop;

--
-- Name: orders_cart_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.orders_cart_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_cart_id_seq OWNER TO stroyshop;

--
-- Name: orders_cart_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.orders_cart_id_seq OWNED BY public.orders_cart.id;


--
-- Name: orders_order; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.orders_order (
    id integer NOT NULL,
    client_name character varying(60) NOT NULL,
    created timestamp with time zone NOT NULL,
    customer_id integer,
    phone character varying(12) NOT NULL,
    shipping_address text NOT NULL,
    state integer NOT NULL,
    total_price numeric(10,2),
    order_unique_id character varying(120)
);


ALTER TABLE public.orders_order OWNER TO stroyshop;

--
-- Name: orders_order_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.orders_order_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_order_id_seq OWNER TO stroyshop;

--
-- Name: orders_order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.orders_order_id_seq OWNED BY public.orders_order.id;


--
-- Name: products_brands; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.products_brands (
    id integer NOT NULL,
    name character varying(60) NOT NULL,
    logo character varying(100) NOT NULL,
    category_id integer
);


ALTER TABLE public.products_brands OWNER TO stroyshop;

--
-- Name: products_brands_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.products_brands_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_brands_id_seq OWNER TO stroyshop;

--
-- Name: products_brands_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.products_brands_id_seq OWNED BY public.products_brands.id;


--
-- Name: products_category; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.products_category (
    id integer NOT NULL,
    "order" integer NOT NULL,
    lft integer NOT NULL,
    rght integer NOT NULL,
    tree_id integer NOT NULL,
    mptt_level integer NOT NULL,
    parent_id integer,
    CONSTRAINT products_category_lft_check CHECK ((lft >= 0)),
    CONSTRAINT products_category_mptt_level_675133a8_check CHECK ((mptt_level >= 0)),
    CONSTRAINT products_category_rght_check CHECK ((rght >= 0)),
    CONSTRAINT products_category_tree_id_check CHECK ((tree_id >= 0))
);


ALTER TABLE public.products_category OWNER TO stroyshop;

--
-- Name: products_category_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.products_category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_category_id_seq OWNER TO stroyshop;

--
-- Name: products_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.products_category_id_seq OWNED BY public.products_category.id;


--
-- Name: products_category_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.products_category_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    master_id integer,
    slug character varying(50) NOT NULL
);


ALTER TABLE public.products_category_translation OWNER TO stroyshop;

--
-- Name: products_category_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.products_category_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_category_translation_id_seq OWNER TO stroyshop;

--
-- Name: products_category_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.products_category_translation_id_seq OWNED BY public.products_category_translation.id;


--
-- Name: products_color; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.products_color (
    id integer NOT NULL,
    color character varying(18) NOT NULL
);


ALTER TABLE public.products_color OWNER TO stroyshop;

--
-- Name: products_color_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.products_color_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    master_id integer
);


ALTER TABLE public.products_color_translation OWNER TO stroyshop;

--
-- Name: products_color_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.products_color_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_color_translation_id_seq OWNER TO stroyshop;

--
-- Name: products_color_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.products_color_translation_id_seq OWNED BY public.products_color_translation.id;


--
-- Name: products_product; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.products_product (
    id integer NOT NULL,
    name character varying(120) NOT NULL,
    description text,
    characters text,
    brand_id integer NOT NULL,
    category_id integer NOT NULL,
    owner_id integer NOT NULL,
    updated date NOT NULL,
    available_in_stock boolean NOT NULL,
    volume_id integer NOT NULL,
    is_recommended boolean NOT NULL,
    price numeric(10,2),
    is_top boolean NOT NULL,
    default_image character varying(60) NOT NULL,
    image_0 character varying(100),
    image_1 character varying(100),
    image_2 character varying(100)
);


ALTER TABLE public.products_product OWNER TO stroyshop;

--
-- Name: products_product_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.products_product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_product_id_seq OWNER TO stroyshop;

--
-- Name: products_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.products_product_id_seq OWNED BY public.products_product.id;


--
-- Name: products_productcolor_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.products_productcolor_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_productcolor_id_seq OWNER TO stroyshop;

--
-- Name: products_productcolor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.products_productcolor_id_seq OWNED BY public.products_color.id;


--
-- Name: products_productimage; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.products_productimage (
    id integer NOT NULL,
    image character varying(100) NOT NULL,
    product_id integer NOT NULL
);


ALTER TABLE public.products_productimage OWNER TO stroyshop;

--
-- Name: products_productimage_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.products_productimage_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_productimage_id_seq OWNER TO stroyshop;

--
-- Name: products_productimage_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.products_productimage_id_seq OWNED BY public.products_productimage.id;


--
-- Name: products_review; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.products_review (
    created_at timestamp with time zone NOT NULL,
    id integer NOT NULL,
    text text NOT NULL,
    is_approved boolean NOT NULL,
    product_id integer NOT NULL,
    reviewer_location character varying(120),
    subject character varying(60) NOT NULL,
    reviewer character varying(120) NOT NULL
);


ALTER TABLE public.products_review OWNER TO stroyshop;

--
-- Name: products_review_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.products_review_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_review_id_seq OWNER TO stroyshop;

--
-- Name: products_review_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.products_review_id_seq OWNED BY public.products_review.id;


--
-- Name: products_variation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.products_variation (
    id integer NOT NULL,
    price numeric(10,2) NOT NULL,
    quantity integer NOT NULL,
    product_id integer NOT NULL,
    name character varying(60) NOT NULL,
    color_id integer
);


ALTER TABLE public.products_variation OWNER TO stroyshop;

--
-- Name: products_variation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.products_variation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_variation_id_seq OWNER TO stroyshop;

--
-- Name: products_variation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.products_variation_id_seq OWNED BY public.products_variation.id;


--
-- Name: products_volumetype; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.products_volumetype (
    id integer NOT NULL
);


ALTER TABLE public.products_volumetype OWNER TO stroyshop;

--
-- Name: products_volumetype_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.products_volumetype_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_volumetype_id_seq OWNER TO stroyshop;

--
-- Name: products_volumetype_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.products_volumetype_id_seq OWNED BY public.products_volumetype.id;


--
-- Name: products_volumetype_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.products_volumetype_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    master_id integer
);


ALTER TABLE public.products_volumetype_translation OWNER TO stroyshop;

--
-- Name: products_volumetype_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.products_volumetype_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_volumetype_translation_id_seq OWNER TO stroyshop;

--
-- Name: products_volumetype_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.products_volumetype_translation_id_seq OWNED BY public.products_volumetype_translation.id;


--
-- Name: users_client; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.users_client (
    id integer NOT NULL,
    address text,
    user_id integer NOT NULL
);


ALTER TABLE public.users_client OWNER TO stroyshop;

--
-- Name: users_client_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.users_client_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_client_id_seq OWNER TO stroyshop;

--
-- Name: users_client_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.users_client_id_seq OWNED BY public.users_client.id;


--
-- Name: users_files; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.users_files (
    id integer NOT NULL,
    file character varying(100) NOT NULL
);


ALTER TABLE public.users_files OWNER TO stroyshop;

--
-- Name: users_files_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.users_files_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_files_id_seq OWNER TO stroyshop;

--
-- Name: users_files_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.users_files_id_seq OWNED BY public.users_files.id;


--
-- Name: users_merchant; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.users_merchant (
    id integer NOT NULL,
    merchant_type integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.users_merchant OWNER TO stroyshop;

--
-- Name: users_merchant_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.users_merchant_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_merchant_id_seq OWNER TO stroyshop;

--
-- Name: users_merchant_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.users_merchant_id_seq OWNED BY public.users_merchant.id;


--
-- Name: users_user; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.users_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    is_staff boolean NOT NULL,
    phone character varying(12) NOT NULL,
    email character varying(254) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(30) NOT NULL,
    date_joined timestamp with time zone NOT NULL,
    is_active boolean NOT NULL,
    avatar_id integer
);


ALTER TABLE public.users_user OWNER TO stroyshop;

--
-- Name: users_user_groups; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.users_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.users_user_groups OWNER TO stroyshop;

--
-- Name: users_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.users_user_groups_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_groups_id_seq OWNER TO stroyshop;

--
-- Name: users_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.users_user_groups_id_seq OWNED BY public.users_user_groups.id;


--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.users_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO stroyshop;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users_user.id;


--
-- Name: users_user_user_permissions; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.users_user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.users_user_user_permissions OWNER TO stroyshop;

--
-- Name: users_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.users_user_user_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_user_permissions_id_seq OWNER TO stroyshop;

--
-- Name: users_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.users_user_user_permissions_id_seq OWNED BY public.users_user_user_permissions.id;


--
-- Name: auth_group id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);


--
-- Name: auth_group_permissions id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);


--
-- Name: auth_permission id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);


--
-- Name: django_admin_log id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);


--
-- Name: django_content_type id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);


--
-- Name: django_migrations id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);


--
-- Name: main_banner id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_banner ALTER COLUMN id SET DEFAULT nextval('public.main_banner_id_seq'::regclass);


--
-- Name: main_banner_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_banner_translation ALTER COLUMN id SET DEFAULT nextval('public.main_banner_translation_id_seq'::regclass);


--
-- Name: main_customermenu id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_customermenu ALTER COLUMN id SET DEFAULT nextval('public.main_customermenu_id_seq'::regclass);


--
-- Name: main_customermenu_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_customermenu_translation ALTER COLUMN id SET DEFAULT nextval('public.main_customermenu_translation_id_seq'::regclass);


--
-- Name: main_menu id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_menu ALTER COLUMN id SET DEFAULT nextval('public.main_menu_id_seq'::regclass);


--
-- Name: main_menu_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_menu_translation ALTER COLUMN id SET DEFAULT nextval('public.main_menu_translation_id_seq'::regclass);


--
-- Name: main_static id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_static ALTER COLUMN id SET DEFAULT nextval('public.main_static_id_seq'::regclass);


--
-- Name: main_static_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_static_translation ALTER COLUMN id SET DEFAULT nextval('public.main_static_translation_id_seq'::regclass);


--
-- Name: main_usermenu id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_usermenu ALTER COLUMN id SET DEFAULT nextval('public.main_usermenu_id_seq'::regclass);


--
-- Name: main_usermenu_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_usermenu_translation ALTER COLUMN id SET DEFAULT nextval('public.main_usermenu_translation_id_seq'::regclass);


--
-- Name: orders_cart id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.orders_cart ALTER COLUMN id SET DEFAULT nextval('public.orders_cart_id_seq'::regclass);


--
-- Name: orders_order id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.orders_order ALTER COLUMN id SET DEFAULT nextval('public.orders_order_id_seq'::regclass);


--
-- Name: products_brands id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_brands ALTER COLUMN id SET DEFAULT nextval('public.products_brands_id_seq'::regclass);


--
-- Name: products_category id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_category ALTER COLUMN id SET DEFAULT nextval('public.products_category_id_seq'::regclass);


--
-- Name: products_category_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_category_translation ALTER COLUMN id SET DEFAULT nextval('public.products_category_translation_id_seq'::regclass);


--
-- Name: products_color id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_color ALTER COLUMN id SET DEFAULT nextval('public.products_productcolor_id_seq'::regclass);


--
-- Name: products_color_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_color_translation ALTER COLUMN id SET DEFAULT nextval('public.products_color_translation_id_seq'::regclass);


--
-- Name: products_product id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_product ALTER COLUMN id SET DEFAULT nextval('public.products_product_id_seq'::regclass);


--
-- Name: products_productimage id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_productimage ALTER COLUMN id SET DEFAULT nextval('public.products_productimage_id_seq'::regclass);


--
-- Name: products_review id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_review ALTER COLUMN id SET DEFAULT nextval('public.products_review_id_seq'::regclass);


--
-- Name: products_variation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_variation ALTER COLUMN id SET DEFAULT nextval('public.products_variation_id_seq'::regclass);


--
-- Name: products_volumetype id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_volumetype ALTER COLUMN id SET DEFAULT nextval('public.products_volumetype_id_seq'::regclass);


--
-- Name: products_volumetype_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_volumetype_translation ALTER COLUMN id SET DEFAULT nextval('public.products_volumetype_translation_id_seq'::regclass);


--
-- Name: users_client id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_client ALTER COLUMN id SET DEFAULT nextval('public.users_client_id_seq'::regclass);


--
-- Name: users_files id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_files ALTER COLUMN id SET DEFAULT nextval('public.users_files_id_seq'::regclass);


--
-- Name: users_merchant id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_merchant ALTER COLUMN id SET DEFAULT nextval('public.users_merchant_id_seq'::regclass);


--
-- Name: users_user id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user ALTER COLUMN id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Name: users_user_groups id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user_groups ALTER COLUMN id SET DEFAULT nextval('public.users_user_groups_id_seq'::regclass);


--
-- Name: users_user_user_permissions id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.users_user_user_permissions_id_seq'::regclass);


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add log entry	1	add_logentry
2	Can change log entry	1	change_logentry
3	Can delete log entry	1	delete_logentry
4	Can add permission	2	add_permission
5	Can change permission	2	change_permission
6	Can delete permission	2	delete_permission
7	Can add group	3	add_group
8	Can change group	3	change_group
9	Can delete group	3	delete_group
10	Can add content type	4	add_contenttype
11	Can change content type	4	change_contenttype
12	Can delete content type	4	delete_contenttype
13	Can add session	5	add_session
14	Can change session	5	change_session
15	Can delete session	5	delete_session
16	Can add user	6	add_user
17	Can change user	6	change_user
18	Can delete user	6	delete_user
19	Can add category	7	add_category
20	Can change category	7	change_category
21	Can delete category	7	delete_category
22	Can add Category tree	8	add_categorytree
23	Can change Category tree	8	change_categorytree
24	Can delete Category tree	8	delete_categorytree
25	Can add categories	9	add_categories
26	Can change categories	9	change_categories
27	Can delete categories	9	delete_categories
28	Can add Category tree	12	add_categories
29	Can change Category tree	12	change_categories
30	Can delete Category tree	12	delete_categories
31	Can add category	14	add_category
32	Can change category	14	change_category
33	Can delete category	14	delete_category
34	Can add menu	15	add_menu
35	Can change menu	15	change_menu
36	Can delete menu	15	delete_menu
37	Can add banner	17	add_banner
38	Can change banner	17	change_banner
39	Can delete banner	17	delete_banner
40	Can add brands	19	add_brands
41	Can change brands	19	change_brands
42	Can delete brands	19	delete_brands
43	Can add client	20	add_client
44	Can change client	20	change_client
45	Can delete client	20	delete_client
46	Can add merchant	21	add_merchant
47	Can change merchant	21	change_merchant
48	Can delete merchant	21	delete_merchant
49	Can add variation	22	add_variation
50	Can change variation	22	change_variation
51	Can delete variation	22	delete_variation
52	Can add product	23	add_product
53	Can change product	23	change_product
54	Can delete product	23	delete_product
55	Can add product image	24	add_productimage
56	Can change product image	24	change_productimage
57	Can delete product image	24	delete_productimage
58	Can add review	25	add_review
59	Can change review	25	change_review
60	Can delete review	25	delete_review
61	Can add static	26	add_static
62	Can change static	26	change_static
63	Can delete static	26	delete_static
64	Can add color	28	add_color
65	Can change color	28	change_color
66	Can delete color	28	delete_color
67	Can add product color	29	add_productcolor
68	Can change product color	29	change_productcolor
69	Can delete product color	29	delete_productcolor
70	Can add volume type	31	add_volumetype
71	Can change volume type	31	change_volumetype
72	Can delete volume type	31	delete_volumetype
73	Can add cart	33	add_cart
74	Can change cart	33	change_cart
75	Can delete cart	33	delete_cart
76	Can add order	34	add_order
77	Can change order	34	change_order
78	Can delete order	34	delete_order
79	Can add files	35	add_files
80	Can change files	35	change_files
81	Can delete files	35	delete_files
82	Can add users menu	36	add_usersmenu
83	Can change users menu	36	change_usersmenu
84	Can delete users menu	36	delete_usersmenu
85	Can add customers menu	37	add_customersmenu
86	Can change customers menu	37	change_customersmenu
87	Can delete customers menu	37	delete_customersmenu
88	Can add customer menu	38	add_customermenu
89	Can change customer menu	38	change_customermenu
90	Can delete customer menu	38	delete_customermenu
91	Can add user menu	40	add_usermenu
92	Can change user menu	40	change_usermenu
93	Can delete user menu	40	delete_usermenu
\.


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 93, true);


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2018-02-22 02:06:20.38367+05	1	998389478	2	[{"changed": {"fields": ["phone"]}}]	6	1
2	2018-02-23 00:49:58.337403+05	2	Водоэмульсионная краска	1	[{"added": {}}]	14	1
3	2018-02-23 00:50:56.10817+05	2	Vodoimulsiya kraska	2	[{"changed": {"fields": ["name", "slug"]}}]	14	1
4	2018-02-23 01:02:10.03188+05	3	Герметика и Монтаж пена	1	[{"added": {}}]	14	1
5	2018-02-23 01:02:24.951449+05	4	Грунтовка	1	[{"added": {}}]	14	1
6	2018-02-23 01:03:03.302834+05	5	Декоративная штукатура	1	[{"added": {}}]	14	1
7	2018-02-23 01:03:21.789414+05	6	Инструменты	1	[{"added": {}}]	14	1
8	2018-02-23 01:03:36.257601+05	7	Клеи	1	[{"added": {}}]	14	1
9	2018-02-23 01:03:46.952173+05	8	Колер	1	[{"added": {}}]	14	1
10	2018-02-23 01:04:07.230223+05	9	Сухие строй-смеси	1	[{"added": {}}]	14	1
11	2018-02-23 01:04:36.275896+05	10	Эмалевая краска и Лак	1	[{"added": {}}]	14	1
12	2018-02-23 01:05:07.921303+05	11	Внутренная	1	[{"added": {}}]	14	1
13	2018-02-23 01:05:29.352101+05	12	Премиум	1	[{"added": {}}]	14	1
14	2018-02-23 01:05:51.146993+05	13	Универсальная	1	[{"added": {}}]	14	1
15	2018-02-23 01:06:01.911498+05	14	Фасадная	1	[{"added": {}}]	14	1
16	2018-02-23 01:06:24.137805+05	15	Цветная	1	[{"added": {}}]	14	1
17	2018-02-23 01:08:28.416356+05	16	Внутренная	1	[{"added": {}}]	14	1
18	2018-02-23 01:08:43.751619+05	17	Премиум	1	[{"added": {}}]	14	1
19	2018-02-23 01:19:42.754808+05	1	Menu object	1	[{"added": {}}]	15	1
20	2018-02-23 01:20:46.101545+05	2	Оплата	1	[{"added": {}}]	15	1
21	2018-02-23 01:20:59.796596+05	3	Контакты	1	[{"added": {}}]	15	1
22	2018-02-23 01:21:15.193913+05	4	Премущества	1	[{"added": {}}]	15	1
23	2018-02-23 01:30:31.135794+05	1	Супер-прочные краски от "SICO"	1	[{"added": {}}]	17	1
24	2018-02-23 01:30:51.283106+05	2	Супер-прочные краски от "SICO"	1	[{"added": {}}]	17	1
25	2018-02-23 01:34:09.424736+05	1	Artens	1	[{"added": {}}]	19	1
26	2018-02-23 01:34:29.138584+05	2	LUXENS	1	[{"added": {}}]	19	1
27	2018-02-23 01:34:42.46066+05	3	Lexman	1	[{"added": {}}]	19	1
28	2018-02-23 01:35:00.864351+05	4	STERWINS	1	[{"added": {}}]	19	1
29	2018-02-23 02:17:37.130895+05	1	A'zam	2	[{"changed": {"fields": ["first_name", "last_name"]}}]	6	1
30	2018-02-27 19:09:05.722522+05	2	Water-based paint	2	[{"changed": {"fields": ["name", "slug"]}}]	14	1
31	2018-02-27 19:09:09.070796+05	4	STERWINS	2	[{"changed": {"fields": ["category"]}}]	19	1
32	2018-02-27 19:34:53.531314+05	5	test	1	[{"added": {}}]	19	1
33	2018-02-27 19:35:26.714771+05	6	test2	1	[{"added": {}}]	19	1
34	2018-02-27 19:36:49.027114+05	7	test3	1	[{"added": {}}]	19	1
35	2018-02-27 19:37:56.418972+05	8	test4	1	[{"added": {}}]	19	1
36	2018-02-27 19:38:25.900902+05	9	test5	1	[{"added": {}}]	19	1
37	2018-02-27 19:43:09.001742+05	10	test6	1	[{"added": {}}]	19	1
38	2018-02-27 19:43:22.62789+05	11	test7	1	[{"added": {}}]	19	1
39	2018-02-27 19:46:12.03526+05	12	test8	1	[{"added": {}}]	19	1
40	2018-02-27 19:46:27.323443+05	13	test9	1	[{"added": {}}]	19	1
41	2018-02-27 19:47:29.818372+05	14	test10	1	[{"added": {}}]	19	1
42	2018-02-27 19:48:26.398102+05	15	test11	1	[{"added": {}}]	19	1
43	2018-02-27 19:49:24.561436+05	16	test12	1	[{"added": {}}]	19	1
44	2018-02-27 19:49:47.716699+05	17	test13	1	[{"added": {}}]	19	1
45	2018-02-27 19:50:03.532096+05	18	test14	1	[{"added": {}}]	19	1
46	2018-02-27 19:50:21.767553+05	19	15	1	[{"added": {}}]	19	1
47	2018-02-27 19:52:43.16083+05	1	dota 2	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "variation", "object": "qop"}}, {"added": {"name": "variation", "object": "wr"}}, {"added": {"name": "variation", "object": "warden"}}]	23	1
48	2018-02-27 19:54:35.017127+05	4	Benefits	2	[{"changed": {"fields": ["name", "slug"]}}]	15	1
49	2018-02-27 19:54:51.113515+05	4	Avfzalliklarimiz	2	[{"changed": {"fields": ["name", "slug"]}}]	15	1
50	2018-02-27 19:55:31.391045+05	2	deadmau5	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "variation", "object": "midas's heel"}}, {"added": {"name": "variation", "object": "strobe"}}, {"added": {"name": "variation", "object": "clockwork"}}]	23	1
51	2018-02-27 23:50:56.217675+05	2	Super power	2	[{"changed": {"fields": ["name", "slug", "image"]}}]	17	1
52	2018-02-27 23:51:19.044698+05	2	Super mustahkam	2	[{"changed": {"fields": ["name", "slug", "image"]}}]	17	1
53	2018-02-28 00:04:31.267672+05	1	Доставка	1	[{"added": {}}]	26	1
54	2018-02-28 00:04:53.286292+05	2	Оплата	1	[{"added": {}}]	26	1
55	2018-02-28 00:05:08.589765+05	3	Контакты	1	[{"added": {}}]	26	1
56	2018-02-28 00:05:23.825602+05	4	Премущества	1	[{"added": {}}]	26	1
57	2018-02-28 00:08:46.59529+05	4	Preference	2	[{"changed": {"fields": ["name", "slug", "body"]}}]	26	1
58	2018-02-28 00:09:30.545452+05	4	Benefits	2	[{"changed": {"fields": ["name", "slug", "body"]}}]	26	1
59	2018-02-28 00:09:52.33979+05	4	Премущества	2	[]	15	1
60	2018-02-28 00:09:57.529773+05	4	Benefits	2	[]	15	1
61	2018-02-28 00:10:11.445205+05	3	Контакты	2	[]	15	1
62	2018-02-28 00:17:58.882693+05	3	Contact	2	[{"changed": {"fields": ["name", "slug", "body"]}}]	26	1
63	2018-02-28 00:31:48.260238+05	3	aasasasas	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "variation", "object": "5 litr"}}]	23	1
64	2018-03-01 00:32:19.227333+05	18	test14	2	[{"changed": {"fields": ["category"]}}]	19	1
65	2018-03-01 00:43:37.551288+05	1	dota 2	2	[{"changed": {"fields": ["volume"]}}, {"changed": {"name": "variation", "object": "9", "fields": ["name"]}}]	23	1
66	2018-03-01 00:44:15.813834+05	3	aasasasas	2	[{"changed": {"name": "variation", "object": "5", "fields": ["name"]}}]	23	1
67	2018-03-01 00:44:37.567354+05	2	deadmau5	2	[{"changed": {"fields": ["volume"]}}]	23	1
68	2018-03-01 12:27:15.437796+05	1	Красный	1	[{"added": {}}]	28	1
69	2018-03-01 12:27:21.872629+05	1	Red	2	[{"changed": {"fields": ["name"]}}]	28	1
70	2018-03-01 12:27:29.751764+05	1	Qizil	2	[{"changed": {"fields": ["name"]}}]	28	1
71	2018-03-01 12:36:32.743235+05	1	Qizil	2	[]	28	1
72	2018-03-01 12:36:53.027275+05	2	Yashil	1	[{"added": {}}]	28	1
73	2018-03-01 12:37:05.448547+05	2	Зеленый	2	[{"changed": {"fields": ["name"]}}]	28	1
74	2018-03-01 12:37:14.03593+05	2	Green	2	[{"changed": {"fields": ["name"]}}]	28	1
75	2018-03-01 15:12:41.142509+05	2	Зеленый	2	[{"changed": {"fields": ["color"]}}]	28	1
76	2018-03-01 15:12:47.182308+05	2	Green	2	[]	28	1
77	2018-03-01 15:26:09.779115+05	3	aasasasas	2	[{"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "Test var 1"}}, {"added": {"name": "Variation", "object": "Test var 2"}}, {"added": {"name": "Variation", "object": "Test var 3"}}]	23	1
78	2018-03-01 19:14:22.952465+05	3	aasasasas	2	[{"changed": {"name": "Variation", "object": "Test var 1", "fields": ["color"]}}, {"changed": {"name": "Variation", "object": "Test var 2", "fields": ["color"]}}]	23	1
79	2018-03-01 21:54:04.219674+05	3	aasasasas	2	[{"changed": {"name": "Variation", "object": "Test var 3", "fields": ["color"]}}]	23	1
80	2018-03-02 00:41:18.167515+05	18	Краска	1	[{"added": {}}]	14	1
81	2018-03-02 00:41:51.051387+05	19	Универсальная	1	[{"added": {}}]	14	1
82	2018-03-02 00:42:12.977476+05	20	Половая	1	[{"added": {}}]	14	1
83	2018-03-02 00:42:46.870359+05	21	Фасадная	1	[{"added": {}}]	14	1
84	2018-03-02 00:43:12.650837+05	19	15	3		19	1
85	2018-03-02 00:43:12.678879+05	18	test14	3		19	1
86	2018-03-02 00:43:12.689966+05	17	test13	3		19	1
87	2018-03-02 00:43:12.700895+05	16	test12	3		19	1
88	2018-03-02 00:43:12.712012+05	15	test11	3		19	1
89	2018-03-02 00:43:12.723085+05	14	test10	3		19	1
90	2018-03-02 00:43:12.734174+05	13	test9	3		19	1
91	2018-03-02 00:43:12.745173+05	12	test8	3		19	1
92	2018-03-02 00:43:12.756448+05	11	test7	3		19	1
93	2018-03-02 00:43:12.767561+05	10	test6	3		19	1
94	2018-03-02 00:43:12.778427+05	9	test5	3		19	1
95	2018-03-02 00:43:12.78988+05	8	test4	3		19	1
96	2018-03-02 00:43:12.800683+05	7	test3	3		19	1
97	2018-03-02 00:43:12.811664+05	6	test2	3		19	1
98	2018-03-02 00:43:12.82261+05	5	test	3		19	1
99	2018-03-02 00:43:12.834037+05	4	STERWINS	3		19	1
100	2018-03-02 00:43:12.844779+05	3	Lexman	3		19	1
101	2018-03-02 00:43:12.856029+05	2	LUXENS	3		19	1
102	2018-03-02 00:43:12.867089+05	1	Artens	3		19	1
103	2018-03-02 00:43:54.753628+05	20	Polard	1	[{"added": {}}]	19	1
104	2018-03-02 00:48:40.827196+05	3	Polard	1	[{"added": {}}]	6	1
105	2018-03-02 00:48:55.550082+05	1	None	1	[{"added": {}}]	21	1
106	2018-03-02 00:49:27.370185+05	4	Hayat	1	[{"added": {}}]	6	1
107	2018-03-02 00:49:33.350385+05	2	None	1	[{"added": {}}]	21	1
108	2018-03-02 00:57:14.722193+05	4	Econom 118 (белая)	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "2.9"}}]	23	1
109	2018-03-02 00:58:15.008161+05	5	Eko (половая)	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "2.9"}}]	23	1
110	2018-03-02 00:59:51.862106+05	6	FASAD+	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "20"}}]	23	1
111	2018-03-02 01:01:08.265537+05	6	FASAD+	2	[{"added": {"name": "Variation", "object": "10"}}, {"added": {"name": "Variation", "object": "4"}}]	23	1
112	2018-03-02 01:01:56.671527+05	21	Hayat	1	[{"added": {}}]	19	1
113	2018-03-02 01:02:05.973062+05	21	Hayat	2	[]	19	1
114	2018-03-02 01:04:50.306427+05	7	HAYAT ECO INTERIOR Краска для потолков	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "4.5"}}, {"added": {"name": "Variation", "object": "15"}}, {"added": {"name": "Variation", "object": "25"}}]	23	1
115	2018-03-02 01:06:11.29527+05	8	HAYAT ECO Эмаль Универсал (белая)	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "22"}}, {"added": {"name": "Variation", "object": "3"}}]	23	1
116	2018-03-02 01:06:47.031917+05	22	Пена	1	[{"added": {}}]	14	1
117	2018-03-02 01:08:49.919511+05	9	HAYAT EXTRA Пена монтажная (аплик/пист) 700/750)	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "750"}}]	23	1
118	2018-03-02 01:09:35.306617+05	23	Краска-115	1	[{"added": {}}]	14	1
119	2018-03-02 01:11:08.486576+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "15"}}, {"added": {"name": "Variation", "object": "25"}}]	23	1
120	2018-03-02 04:13:52.956545+05	1	Кг	2	[{"changed": {"fields": ["name"]}}]	31	1
121	2018-03-02 04:14:01.613962+05	1	Kg	2	[{"changed": {"fields": ["name"]}}]	31	1
122	2018-03-02 04:14:08.147667+05	1	Kg	2	[{"changed": {"fields": ["name"]}}]	31	1
123	2018-03-02 05:13:44.027982+05	16	Test comment	2	[{"changed": {"fields": ["is_approved"]}}]	25	1
124	2018-03-02 19:08:10.163445+05	13	Универсальная	2	[{"changed": {"fields": ["slug"]}}]	14	1
125	2018-03-02 19:08:44.217557+05	21	Фасадная	2	[{"changed": {"fields": ["slug"]}}]	14	1
126	2018-03-02 19:09:16.594164+05	17	Премиум	2	[{"changed": {"fields": ["slug"]}}]	14	1
127	2018-03-02 19:09:39.789023+05	16	Внутренная	2	[{"changed": {"fields": ["slug"]}}]	14	1
128	2018-03-03 01:51:21.47614+05	5	1234	3		6	1
129	2018-03-03 02:05:33.477707+05	11	Maxamov	3		6	1
130	2018-03-03 02:05:33.502329+05	10	Maxamov	3		6	1
131	2018-03-03 02:05:33.513488+05	9	Maxam	3		6	1
132	2018-03-03 02:05:33.524669+05	7	Maxam	3		6	1
133	2018-03-03 02:05:33.538789+05	6	1234567	3		6	1
134	2018-03-03 18:29:55.875016+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	2	[{"changed": {"fields": ["is_recommended"]}}]	23	1
135	2018-03-03 18:30:04.740763+05	9	HAYAT EXTRA Пена монтажная (аплик/пист) 700/750)	2	[{"changed": {"fields": ["is_recommended"]}}]	23	1
136	2018-03-06 00:48:54.040924+05	5	wmi81g6ptm5h76z78cv9lgope4gf3i16	3		33	1
137	2018-03-06 00:48:54.147845+05	4	wmi81g6ptm5h76z78cv9lgope4gf3i16	3		33	1
138	2018-03-06 00:48:54.161554+05	3	wmi81g6ptm5h76z78cv9lgope4gf3i16	3		33	1
139	2018-03-06 00:48:54.172533+05	2	wmi81g6ptm5h76z78cv9lgope4gf3i16	3		33	1
140	2018-03-06 09:49:49.063293+05	7	HAYAT ECO INTERIOR Краска для потолков	2	[{"changed": {"name": "Variation", "object": "4.5", "fields": ["color"]}}, {"changed": {"name": "Variation", "object": "15", "fields": ["color"]}}, {"changed": {"name": "Variation", "object": "25", "fields": ["color"]}}]	23	1
141	2018-03-06 22:28:47.011384+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	2	[]	23	1
142	2018-03-07 13:25:15.691061+05	3	Order object	3		34	1
143	2018-03-07 13:25:15.720685+05	2	Order object	3		34	1
144	2018-03-07 13:25:15.731491+05	1	Order object	3		34	1
145	2018-03-07 17:06:42.846142+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	2	[]	23	1
146	2018-03-07 17:07:00.391062+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	2	[{"added": {"name": "Variation", "object": "36"}}]	23	1
147	2018-03-07 17:07:13.916164+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	2	[{"changed": {"fields": ["characters"]}}]	23	1
148	2018-03-07 17:08:05.353234+05	9	HAYAT EXTRA Пена монтажная (аплик/пист) 700/750)	2	[]	23	1
149	2018-03-07 17:08:08.642889+05	8	HAYAT ECO Эмаль Универсал (белая)	2	[]	23	1
150	2018-03-07 17:08:11.0227+05	7	HAYAT ECO INTERIOR Краска для потолков	2	[]	23	1
151	2018-03-07 17:08:13.734281+05	6	FASAD+	2	[]	23	1
152	2018-03-07 17:08:16.578308+05	5	Eko (половая)	2	[]	23	1
153	2018-03-07 17:08:20.30856+05	4	Econom 118 (белая)	2	[]	23	1
154	2018-03-07 17:11:00.802904+05	11	asasasasasas	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "Test"}}]	23	1
155	2018-03-07 17:17:41.575382+05	11	asasasasasas	2	[]	23	1
156	2018-03-07 17:21:39.740449+05	11	asasasasasas	2	[{"changed": {"name": "Variation", "object": "Test", "fields": ["price"]}}]	23	1
157	2018-03-07 17:22:25.304449+05	12	asaa121212	1	[{"added": {}}, {"added": {"name": "Variation", "object": "asasasas"}}]	23	1
158	2018-03-07 17:23:18.093873+05	12	asaa121212	2	[]	23	1
159	2018-03-07 17:24:30.295787+05	14	asasas	1	[{"added": {}}, {"added": {"name": "Variation", "object": "as121212"}}]	23	1
160	2018-03-07 17:25:04.968968+05	15	asasas	1	[{"added": {}}, {"added": {"name": "Variation", "object": "assssssssss"}}]	23	1
161	2018-03-07 17:32:08.608534+05	19	asaasasas	1	[{"added": {}}, {"added": {"name": "Variation", "object": "121212qawqw"}}]	23	1
162	2018-03-07 17:33:24.976059+05	19	asaasasas	3		23	1
163	2018-03-07 17:33:25.004815+05	15	asasas	3		23	1
164	2018-03-07 17:33:25.015416+05	14	asasas	3		23	1
165	2018-03-07 17:33:25.026502+05	12	asaa121212	3		23	1
166	2018-03-07 17:33:25.037721+05	11	asasasasasas	3		23	1
167	2018-03-07 17:34:40.65095+05	20	as112	1	[{"added": {}}, {"added": {"name": "Variation", "object": "Test 123"}}]	23	1
168	2018-03-07 17:35:33.185527+05	20	as112	3		23	1
169	2018-03-07 17:37:03.29771+05	22	Test 123	1	[{"added": {}}, {"added": {"name": "Variation", "object": "Test 123"}}]	23	1
170	2018-03-07 17:37:29.373083+05	22	Test 123	2	[]	23	1
171	2018-03-07 17:37:43.415345+05	22	Test 123	2	[{"changed": {"name": "Variation", "object": "Test 123", "fields": ["price"]}}]	23	1
172	2018-03-07 17:37:51.69806+05	22	Test 123	3		23	1
173	2018-03-07 17:38:21.347565+05	23	Test product	1	[{"added": {}}, {"added": {"name": "Variation", "object": "Test contact"}}]	23	1
174	2018-03-07 17:38:40.986194+05	23	Test product	2	[{"added": {"name": "Variation", "object": "Test contact 2"}}, {"changed": {"name": "Variation", "object": "Test contact", "fields": ["price"]}}]	23	1
175	2018-03-07 17:44:09.418117+05	23	Test product	3		23	1
176	2018-03-07 17:44:36.621369+05	24	Test product	1	[{"added": {}}, {"added": {"name": "Variation", "object": "Test var"}}]	23	1
177	2018-03-07 17:44:58.1312+05	24	Test product	2	[]	23	1
178	2018-03-07 17:46:24.407927+05	24	Test product	2	[]	23	1
179	2018-03-07 18:07:51.420632+05	24	Test product	2	[]	23	1
180	2018-03-07 18:08:01.131125+05	24	Test product	3		23	1
181	2018-03-07 18:08:24.956448+05	25	wwqsasas	1	[{"added": {}}, {"added": {"name": "Variation", "object": "Test name"}}]	23	1
182	2018-03-07 18:09:09.295574+05	25	wwqsasas	3		23	1
183	2018-03-07 18:50:23.351103+05	29	test	1	[{"added": {}}, {"added": {"name": "Variation", "object": "asasas"}}]	23	1
184	2018-03-07 18:50:31.305589+05	29	test	2	[]	23	1
185	2018-03-07 18:51:08.55972+05	29	test	2	[]	23	1
186	2018-03-07 18:51:17.65461+05	29	test	3		23	1
187	2018-03-07 18:51:45.403474+05	30	Presave	1	[{"added": {}}, {"added": {"name": "Variation", "object": "Presave"}}]	23	1
188	2018-03-07 18:52:45.259905+05	30	Presave	3		23	1
189	2018-03-07 18:57:25.700883+05	31	Presave	1	[{"added": {}}, {"added": {"name": "Variation", "object": "Tese"}}]	23	1
190	2018-03-07 18:59:55.757411+05	31	Presave	2	[]	23	1
191	2018-03-07 19:00:08.00257+05	31	Presave	2	[{"changed": {"name": "Variation", "object": "Tese", "fields": ["price"]}}]	23	1
192	2018-03-07 19:00:15.472712+05	31	Presave	3		23	1
193	2018-03-07 19:00:45.115121+05	32	Test pro	1	[{"added": {}}, {"added": {"name": "Variation", "object": "Test pro var 1"}}]	23	1
194	2018-03-07 19:01:07.731686+05	32	Test pro	2	[{"added": {"name": "Variation", "object": "Test pro var 2"}}]	23	1
195	2018-03-07 19:01:23.275781+05	32	Test pro	3		23	1
196	2018-03-07 19:02:03.285696+05	33	Test pro	1	[{"added": {}}, {"added": {"name": "Variation", "object": "Test pro var 1"}}, {"added": {"name": "Variation", "object": "Test pro var 2"}}]	23	1
197	2018-03-07 19:08:51.400756+05	33	Test pro	2	[{"changed": {"fields": ["price"]}}]	23	1
198	2018-03-07 19:35:47.282182+05	35	rwasasasas	1	[{"added": {}}, {"added": {"name": "Variation", "object": "ttttttttttttt"}}]	23	1
199	2018-03-07 19:35:54.975977+05	35	rwasasasas	3		23	1
200	2018-03-07 19:35:55.006203+05	33	Test pro	3		23	1
201	2018-03-07 19:36:20.903528+05	36	asasasasas	1	[{"added": {}}, {"added": {"name": "Variation", "object": "asaas"}}]	23	1
202	2018-03-07 19:36:27.793788+05	36	asasasasas	3		23	1
203	2018-03-07 19:37:49.513392+05	37	OOOO	1	[{"added": {}}, {"added": {"name": "Variation", "object": "Test name"}}, {"added": {"name": "Variation", "object": "Test name 2"}}]	23	1
204	2018-03-09 13:05:57.114055+05	37	OOOO	2	[{"changed": {"fields": ["is_top"]}}]	23	1
205	2018-03-09 13:06:04.681022+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	2	[]	23	1
206	2018-03-09 13:16:36.124345+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	2	[{"changed": {"fields": ["is_top"]}}]	23	1
207	2018-03-09 18:33:56.389407+05	1	None	1	[{"added": {}}]	20	1
208	2018-03-09 18:49:10.855805+05	9	Order object	3		34	1
209	2018-03-09 18:49:10.888734+05	8	Order object	3		34	1
210	2018-03-09 18:49:10.94412+05	7	Order object	3		34	1
211	2018-03-09 18:49:10.955011+05	6	Order object	3		34	1
212	2018-03-09 18:49:10.966201+05	5	Order object	3		34	1
213	2018-03-09 18:49:10.977281+05	4	Order object	3		34	1
214	2018-03-09 19:57:57.211968+05	12	Order object	2	[{"changed": {"fields": ["order_unique_id"]}}]	34	1
215	2018-03-10 19:56:01.62256+05	3	Синий	1	[{"added": {}}]	28	1
216	2018-03-10 19:56:03.953302+05	8	HAYAT ECO Эмаль Универсал (белая)	2	[{"changed": {"name": "Variation", "object": "22", "fields": ["color"]}}]	23	1
217	2018-03-22 00:43:15.742081+05	37	OOOO	2	update through import_export	23	1
218	2018-03-22 00:43:15.80785+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	2	update through import_export	23	1
219	2018-03-22 00:43:15.819078+05	9	HAYAT EXTRA Пена монтажная (аплик/пист) 700/750)	2	update through import_export	23	1
220	2018-03-22 00:43:15.830172+05	8	HAYAT ECO Эмаль Универсал (белая)	2	update through import_export	23	1
221	2018-03-22 00:43:15.84116+05	7	HAYAT ECO INTERIOR Краска для потолков	2	update through import_export	23	1
222	2018-03-22 00:43:15.852355+05	6	FASAD+	2	update through import_export	23	1
223	2018-03-22 00:43:15.863522+05	5	Eko (половая)	2	update through import_export	23	1
224	2018-03-22 00:43:15.874482+05	4	Econom 118 (белая)	2	update through import_export	23	1
225	2018-03-26 04:52:11.366221+05	53	Eko (половая)	3		23	1
226	2018-03-26 04:52:11.420264+05	52	FASAD+	3		23	1
227	2018-03-26 04:52:11.431429+05	51	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
228	2018-03-26 04:52:11.442366+05	50	Eko (половая)	3		23	1
229	2018-03-26 04:52:11.453318+05	49	FASAD+	3		23	1
230	2018-03-26 04:52:11.464405+05	48	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
231	2018-03-26 04:52:11.475533+05	47	Eko (половая)	3		23	1
232	2018-03-26 04:52:11.486447+05	46	FASAD+	3		23	1
233	2018-03-26 04:52:11.497705+05	45	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
234	2018-03-26 04:52:11.508715+05	44	Eko (половая)	3		23	1
235	2018-03-26 04:52:11.519804+05	43	FASAD+	3		23	1
236	2018-03-26 04:52:11.530965+05	42	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
237	2018-03-26 04:52:11.542143+05	41	Eko (половая)	3		23	1
238	2018-03-26 04:52:11.553048+05	40	FASAD+	3		23	1
239	2018-03-26 04:52:11.563977+05	39	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
240	2018-03-26 14:15:41.941794+05	37	OOOO 222	2	[]	23	1
241	2018-03-26 14:22:29.658688+05	37	OOOO 222	2	[{"changed": {"fields": ["image_0", "image_1", "image_2"]}}]	23	1
242	2018-03-26 14:25:16.876941+05	37	OOOO 222	2	[{"changed": {"fields": ["image_0", "image_1", "image_2"]}}]	23	1
243	2018-03-26 15:02:16.853314+05	24	Цветная	1	[{"added": {}}]	14	1
244	2018-03-26 15:05:06.78146+05	4	белая	1	[{"added": {}}]	28	1
245	2018-03-26 15:05:07.099377+05	5	белая	1	[{"added": {}}]	28	1
246	2018-03-26 15:05:15.165725+05	4	белая	3		28	1
247	2018-03-26 15:05:30.0379+05	6	голубая	1	[{"added": {}}]	28	1
248	2018-03-26 15:05:44.525756+05	7	желтая	1	[{"added": {}}]	28	1
249	2018-03-26 15:05:57.910546+05	8	темно-зеленая	1	[{"added": {}}]	28	1
250	2018-03-26 15:06:23.646079+05	9	красно-коричневая	1	[{"added": {}}]	28	1
251	2018-03-26 15:06:35.516569+05	10	светло-серая	1	[{"added": {}}]	28	1
252	2018-03-26 15:06:46.474416+05	11	синяя	1	[{"added": {}}]	28	1
253	2018-03-26 15:06:46.82008+05	12	синяя	1	[{"added": {}}]	28	1
254	2018-03-26 15:06:54.138244+05	12	синяя	3		28	1
255	2018-03-26 15:07:10.700202+05	13	черная	1	[{"added": {}}]	28	1
256	2018-03-26 15:07:20.587277+05	14	светло-бежевая	1	[{"added": {}}]	28	1
257	2018-03-26 15:09:43.329792+05	11	синяя	3		28	1
258	2018-03-26 16:15:53.384966+05	89	Eko (половая)	3		23	1
259	2018-03-26 16:15:53.418181+05	88	FASAD+	3		23	1
260	2018-03-26 16:15:53.429206+05	87	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
261	2018-03-26 16:15:53.440239+05	86	Eko (половая)	3		23	1
262	2018-03-26 16:15:53.451577+05	85	FASAD+	3		23	1
263	2018-03-26 16:15:53.462522+05	84	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
264	2018-03-26 16:15:53.473637+05	83	Eko (половая)	3		23	1
265	2018-03-26 16:15:53.484562+05	82	FASAD+	3		23	1
266	2018-03-26 16:15:53.495511+05	81	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
267	2018-03-26 16:15:53.506758+05	80	Eko (половая)	3		23	1
268	2018-03-26 16:15:53.517951+05	79	FASAD+	3		23	1
269	2018-03-26 16:15:53.528886+05	78	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
270	2018-03-26 16:15:53.539969+05	77	Eko (половая)	3		23	1
271	2018-03-26 16:15:53.561952+05	76	FASAD+	3		23	1
272	2018-03-26 16:15:53.573215+05	75	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
273	2018-03-26 16:15:53.584219+05	74	Eko (половая)	3		23	1
274	2018-03-26 16:15:53.595167+05	73	FASAD+	3		23	1
275	2018-03-26 16:15:53.60646+05	72	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
276	2018-03-26 16:15:53.617515+05	71	Eko (половая)	3		23	1
277	2018-03-26 16:15:53.628693+05	70	Eko (половая)	3		23	1
278	2018-03-26 16:15:53.639647+05	69	FASAD+	3		23	1
279	2018-03-26 16:15:53.65093+05	68	FASAD+	3		23	1
280	2018-03-26 16:15:53.662346+05	67	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
281	2018-03-26 16:15:53.672384+05	66	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
282	2018-03-26 16:15:53.683942+05	65	Eko (половая)	3		23	1
283	2018-03-26 16:15:53.695194+05	64	FASAD+	3		23	1
284	2018-03-26 16:15:53.705905+05	63	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
285	2018-03-26 16:15:53.717307+05	62	Eko (половая)	3		23	1
286	2018-03-26 16:15:53.728472+05	61	FASAD+	3		23	1
287	2018-03-26 16:15:53.739435+05	60	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
288	2018-03-26 16:15:53.750226+05	59	Eko (половая)	3		23	1
289	2018-03-26 16:15:53.761584+05	58	FASAD+	3		23	1
290	2018-03-26 16:15:53.772695+05	57	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
291	2018-03-26 16:15:53.783735+05	56	Eko (половая)	3		23	1
292	2018-03-26 16:15:53.794791+05	55	FASAD+	3		23	1
293	2018-03-26 16:15:53.805981+05	54	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
294	2018-03-26 18:17:43.337391+05	9	HAYAT EXTRA Пена монтажная (аплик/пист) 700/750)	3		23	1
295	2018-03-26 18:17:43.368163+05	8	HAYAT ECO Эмаль Универсал (белая)	3		23	1
296	2018-03-26 18:17:43.390018+05	7	HAYAT ECO INTERIOR Краска для потолков	3		23	1
297	2018-03-26 18:17:43.412255+05	6	FASAD+	3		23	1
298	2018-03-26 18:17:43.423323+05	5	Eko (половая)	3		23	1
299	2018-03-26 18:17:43.434066+05	4	Econom 118 (белая)	3		23	1
300	2018-03-26 18:18:24.365862+05	37	dnsdknskdjnsjlkdnsjdnsjlkd	2	[{"changed": {"name": "Variation", "object": "3", "fields": ["name"]}}, {"changed": {"name": "Variation", "object": "1", "fields": ["name"]}}, {"deleted": {"name": "Variation", "object": "Test name 33"}}, {"deleted": {"name": "Variation", "object": "4kg"}}, {"deleted": {"name": "Variation", "object": "4kg"}}, {"deleted": {"name": "Variation", "object": "1kg"}}, {"deleted": {"name": "Variation", "object": "4kg"}}, {"deleted": {"name": "Variation", "object": "3kg"}}]	23	1
301	2018-03-27 00:16:01.815166+05	37	HAYAT Эмаль ПФ-115	2	[{"changed": {"fields": ["description", "characters"]}}, {"deleted": {"name": "Variation", "object": "3"}}]	23	1
302	2018-03-27 00:16:41.542997+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	2	[{"changed": {"fields": ["image_0"]}}, {"deleted": {"name": "Variation", "object": "15"}}, {"deleted": {"name": "Variation", "object": "25"}}, {"deleted": {"name": "Variation", "object": "36"}}]	23	1
303	2018-03-27 00:25:18.827463+05	37	HAYAT Эмаль ПФ-115	2	[{"changed": {"fields": ["description", "characters"]}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "1"}}, {"deleted": {"name": "Variation", "object": "0.9"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "23"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "0.9"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "20"}}, {"deleted": {"name": "Variation", "object": "2.5"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "19"}}, {"deleted": {"name": "Variation", "object": "2.5"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "0.9"}}]	23	1
304	2018-03-27 00:25:29.259387+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	2	[{"changed": {"fields": ["description", "characters"]}}, {"deleted": {"name": "Variation", "object": "20"}}, {"deleted": {"name": "Variation", "object": "10"}}]	23	1
305	2018-03-27 00:28:49.787507+05	37	HAYAT Эмаль ПФ-115	2	[{"changed": {"fields": ["description", "characters"]}}, {"deleted": {"name": "Variation", "object": "23"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "0.9"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "20"}}, {"deleted": {"name": "Variation", "object": "2.5"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "19"}}, {"deleted": {"name": "Variation", "object": "2.5"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "23"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "0.9"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "20"}}, {"deleted": {"name": "Variation", "object": "2.5"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "19"}}, {"deleted": {"name": "Variation", "object": "2.5"}}, {"deleted": {"name": "Variation", "object": "22"}}]	23	1
306	2018-03-27 00:31:20.74195+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	2	[{"changed": {"fields": ["description", "characters"]}}, {"deleted": {"name": "Variation", "object": "20"}}, {"deleted": {"name": "Variation", "object": "10"}}, {"deleted": {"name": "Variation", "object": "20"}}, {"deleted": {"name": "Variation", "object": "10"}}]	23	1
307	2018-03-27 16:47:35.69946+05	90	HAYAT PREMIUM FASAD Краска для нар. работ силикон2-1212121	3		23	1
\.


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 307, true);


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
2	auth	permission
3	auth	group
4	contenttypes	contenttype
5	sessions	session
6	users	user
7	users	category
8	products	categorytree
9	users	categories
10	users	categoriestranslation
11	products	categoriestranslation
12	products	categories
13	products	categorytranslation
14	products	category
15	main	menu
16	main	menutranslation
17	main	banner
18	main	bannertranslation
19	products	brands
20	users	client
21	users	merchant
22	products	variation
23	products	product
24	products	productimage
25	products	review
26	main	static
27	main	statictranslation
28	products	color
29	products	productcolor
30	products	colortranslation
31	products	volumetype
32	products	volumetypetranslation
33	orders	cart
34	orders	order
35	users	files
36	main	usersmenu
37	main	customersmenu
38	main	customermenu
39	main	customermenutranslation
40	main	usermenu
41	main	usermenutranslation
\.


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 41, true);


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2018-02-14 01:14:58.850219+05
2	contenttypes	0002_remove_content_type_name	2018-02-14 01:14:58.938906+05
3	auth	0001_initial	2018-02-14 01:14:59.649186+05
4	auth	0002_alter_permission_name_max_length	2018-02-14 01:14:59.680378+05
5	auth	0003_alter_user_email_max_length	2018-02-14 01:14:59.708635+05
6	auth	0004_alter_user_username_opts	2018-02-14 01:14:59.743361+05
7	auth	0005_alter_user_last_login_null	2018-02-14 01:14:59.77669+05
8	auth	0006_require_contenttypes_0002	2018-02-14 01:14:59.792122+05
9	auth	0007_alter_validators_add_error_messages	2018-02-14 01:14:59.820154+05
10	auth	0008_alter_user_username_max_length	2018-02-14 01:14:59.853005+05
11	users	0001_initial	2018-02-14 01:15:00.392038+05
12	admin	0001_initial	2018-02-14 01:15:00.648793+05
13	admin	0002_logentry_remove_auto_add	2018-02-14 01:15:00.691949+05
14	sessions	0001_initial	2018-02-14 01:15:00.892632+05
15	users	0002_auto_20180131_1203	2018-02-14 01:15:00.927092+05
16	users	0003_auto_20180131_1206	2018-02-14 01:15:00.980546+05
17	users	0004_auto_20180205_1214	2018-02-14 01:15:01.191497+05
18	users	0005_category	2018-02-14 01:15:01.590694+05
19	users	0006_category_is_top	2018-02-14 01:22:03.269973+05
20	users	0007_auto_20180222_1029	2018-02-22 15:29:51.05192+05
21	users	0008_auto_20180222_1857	2018-02-22 23:57:20.921411+05
22	products	0001_initial	2018-02-23 00:01:19.138857+05
23	products	0002_auto_20180222_1947	2018-02-23 00:47:49.435891+05
24	users	0009_auto_20180222_1947	2018-02-23 00:47:49.644082+05
25	products	0003_auto_20180222_1949	2018-02-23 00:49:27.942581+05
26	main	0001_initial	2018-02-23 01:12:34.357276+05
27	main	0002_menu_extra_attrs	2018-02-23 01:16:07.848813+05
28	main	0003_remove_menu_extra_attrs	2018-02-23 01:18:27.811963+05
29	main	0004_auto_20180222_2026	2018-02-23 01:27:05.881903+05
30	products	0004_brands	2018-02-23 01:27:05.982353+05
31	products	0005_auto_20180222_2032	2018-02-23 01:32:30.771728+05
32	products	0006_product_variation	2018-02-23 02:04:19.576038+05
33	users	0010_client_merchant	2018-02-23 02:04:19.886099+05
34	users	0011_remove_user_user_type	2018-02-23 02:16:03.903654+05
35	main	0005_auto_20180222_2133	2018-02-23 02:33:20.447952+05
36	products	0007_auto_20180222_2133	2018-02-23 02:33:21.129281+05
37	users	0012_auto_20180222_2133	2018-02-23 02:33:21.371609+05
38	products	0008_auto_20180222_2137	2018-02-23 02:37:08.688222+05
39	products	0009_auto_20180222_2153	2018-02-23 02:53:16.152403+05
40	products	0010_auto_20180224_1001	2018-02-24 15:01:22.570806+05
41	products	0011_variation_color	2018-02-24 15:06:41.999214+05
42	products	0012_auto_20180224_1009	2018-02-24 15:09:16.168202+05
43	products	0013_brands_category	2018-02-27 18:53:12.324191+05
44	products	0014_auto_20180227_1403	2018-02-27 19:03:27.617272+05
45	products	0015_auto_20180227_1408	2018-02-27 19:08:06.459309+05
46	main	0006_auto_20180227_1901	2018-02-28 00:01:53.381182+05
47	main	0007_auto_20180227_1903	2018-02-28 00:03:50.772608+05
48	products	0016_auto_20180301_0702	2018-03-01 12:12:19.188591+05
49	products	0017_remove_variation_color	2018-03-01 12:12:19.33348+05
50	products	0018_variation_color	2018-03-01 12:12:19.455118+05
51	products	0019_remove_color_name	2018-03-01 12:16:30.866471+05
52	products	0020_auto_20180301_0722	2018-03-01 12:22:24.256942+05
53	products	0021_auto_20180301_0723	2018-03-01 12:23:03.999676+05
54	products	0022_auto_20180301_0726	2018-03-01 12:26:23.216134+05
55	products	0023_auto_20180301_1658	2018-03-01 21:58:51.392816+05
56	products	0024_product_available_in_stock	2018-03-02 00:26:17.156423+05
57	products	0025_auto_20180301_1946	2018-03-02 00:46:35.087206+05
58	products	0026_auto_20180301_2256	2018-03-02 03:56:06.390639+05
59	products	0027_auto_20180301_2256	2018-03-02 04:11:17.241546+05
60	products	0028_auto_20180301_2259	2018-03-02 04:11:17.418572+05
61	products	0029_remove_product_volume	2018-03-02 04:11:17.607072+05
62	products	0030_product_volume	2018-03-02 04:11:17.717652+05
63	products	0031_auto_20180301_2307	2018-03-02 04:11:17.838639+05
64	products	0032_auto_20180301_2311	2018-03-02 04:12:00.411693+05
65	products	0033_product_is_recommended	2018-03-02 04:18:51.124964+05
66	products	0034_auto_20180301_2331	2018-03-02 04:31:11.641572+05
67	products	0035_auto_20180301_2332	2018-03-02 04:32:54.647829+05
68	products	0036_auto_20180301_2339	2018-03-02 04:39:23.192744+05
69	products	0037_auto_20180301_2339	2018-03-02 04:40:01.416594+05
70	products	0038_auto_20180302_1907	2018-03-02 19:09:45.279595+05
71	users	0013_auto_20180303_0156	2018-03-03 01:56:37.455328+05
72	orders	0001_initial	2018-03-05 18:54:01.936428+05
73	users	0014_auto_20180305_1853	2018-03-05 18:54:02.019885+05
74	orders	0002_auto_20180305_1856	2018-03-05 18:56:24.400875+05
75	orders	0003_auto_20180305_2302	2018-03-05 23:02:51.507234+05
76	orders	0004_auto_20180305_2330	2018-03-05 23:30:25.922418+05
77	orders	0005_auto_20180307_1253	2018-03-07 12:53:39.00464+05
78	orders	0006_auto_20180307_1254	2018-03-07 12:54:38.105254+05
79	orders	0007_auto_20180307_1256	2018-03-07 12:56:08.110165+05
80	orders	0008_auto_20180307_1300	2018-03-07 13:00:17.668257+05
81	products	0039_product_price	2018-03-07 17:01:34.412259+05
82	orders	0009_auto_20180307_2057	2018-03-07 20:57:56.422378+05
83	products	0040_auto_20180307_2057	2018-03-07 20:57:57.26965+05
84	products	0041_product_is_top	2018-03-09 12:44:44.81721+05
85	orders	0010_order_unique_id	2018-03-09 18:41:41.578709+05
86	orders	0011_auto_20180309_1842	2018-03-09 18:42:23.732093+05
87	orders	0012_auto_20180309_1850	2018-03-09 18:50:51.307983+05
88	orders	0013_auto_20180309_1955	2018-03-09 19:55:52.912981+05
89	orders	0014_auto_20180309_2014	2018-03-09 20:14:20.916703+05
90	users	0015_auto_20180309_2014	2018-03-09 20:14:21.346204+05
91	users	0016_auto_20180309_2015	2018-03-09 20:15:17.241212+05
92	users	0017_auto_20180309_2027	2018-03-09 20:27:17.104962+05
93	users	0018_auto_20180309_2040	2018-03-09 20:40:14.611264+05
94	main	0008_customersmenu_usersmenu	2018-03-10 17:26:39.299757+05
95	main	0008_auto_20180310_1732	2018-03-10 17:32:43.498415+05
96	products	0042_auto_20180324_0027	2018-03-24 00:27:34.999416+05
97	products	0043_auto_20180326_0433	2018-03-26 04:33:08.505514+05
98	products	0044_auto_20180326_1355	2018-03-26 13:55:23.503811+05
99	products	0045_auto_20180326_1400	2018-03-26 14:03:46.038576+05
100	products	0046_auto_20180326_1403	2018-03-26 14:03:46.165992+05
101	products	0047_auto_20180326_1415	2018-03-26 14:15:20.893332+05
\.


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 101, true);


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
oxr7hxshvn5rov26rbllhnrbfmk7cev0	MTM4NjVlM2IwNDBjZmEzYWE1NzY0MzM2NDU1NzZlYjYwMGYxZDhlYzp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkMjY5MGZlMGIwYTRlYWZmMTYyNDAxZjkzNjg3Y2IyMWMyZGM2OTNiIn0=	2018-02-28 01:25:35.034684+05
a7k6adi6ac6uaroshpqlho0nsgfgsvbw	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-08 02:06:03.175184+05
fii5m7pfwnufcjmwokikupas5atuph1n	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-08 23:49:57.589949+05
pmyvcaswpzudfbhfluu7godte38nd0xm	Njc5ZTM2YTdhYTlhMjA2MWVmYmViOTk0YzQzOTcwY2Y1N2VjY2Y1MDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIiwicHJvZHVjdCI6MSwiY2FydCI6W3sidmFyaWF0aW9uX2lkIjozMSwicXVhbnRpdHkiOjMzLCJjbGllbnRfaWQiOjYxfV19	2018-03-17 04:30:55.245876+05
rqfy0lmhb9qbjbldbv3dnwt4nbcf12gv	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-17 18:29:41.482416+05
j6d0avxuyd1srfxn3sje2snh9bnptps5	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-19 18:54:58.878801+05
4iu00yw2lrnim6pkigg6tjt0fsxmjf9k	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-10 15:11:26.529502+05
ph7k9stmci6jm21pit2z8jf118615zdx	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-24 19:40:02.170547+05
8lcc9cggor490024cxu5583oznwbba4w	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-13 02:03:55.661669+05
fn83rfywoosoigchyjasu3ptmye13qnc	ODY3Mjc2NmFkZGJhODQ0MmY4YTM1ZDAxN2Q0NmEwMTc4MTg1YTA1Yjp7fQ==	2018-03-19 23:09:16.816111+05
85zfbwxcuisq5eiv3yyz4x5qfh5f5wht	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-13 14:02:21.272557+05
7h90470ak4onkee7z2kfdz7zkwmktych	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-13 19:28:32.933524+05
adafhbo47pytykclgjcxyl9nlod1e9qs	ODY3Mjc2NmFkZGJhODQ0MmY4YTM1ZDAxN2Q0NmEwMTc4MTg1YTA1Yjp7fQ==	2018-03-19 23:10:25.06447+05
fxlv414wmgvpfp59xwwxthtd6fpc52pf	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-15 19:13:58.131918+05
ifs8nap5g136s7hpbcxvbicf58cv44hx	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-27 17:50:28.659678+05
an50alff4av105k510p35l8fcpyqsonr	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-16 00:35:30.702356+05
ulx52uwqqevs6mhe4is82ooa289hbr2r	ODY3Mjc2NmFkZGJhODQ0MmY4YTM1ZDAxN2Q0NmEwMTc4MTg1YTA1Yjp7fQ==	2018-03-19 23:11:26.118656+05
0ojja4dem35vg2r05weed8gu873b6m27	ODY3Mjc2NmFkZGJhODQ0MmY4YTM1ZDAxN2Q0NmEwMTc4MTg1YTA1Yjp7fQ==	2018-03-19 23:12:19.56923+05
6v972odpda9te75hfuzjdkf63e1zo7ly	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-04-05 00:28:08.611685+05
4wwqpr8g1oxobjppl7879xnoy0gq2g04	ODY3Mjc2NmFkZGJhODQ0MmY4YTM1ZDAxN2Q0NmEwMTc4MTg1YTA1Yjp7fQ==	2018-03-19 23:14:16.235394+05
db7y9nzd5h3rcne362m4qsrsdo9jnje1	ODY3Mjc2NmFkZGJhODQ0MmY4YTM1ZDAxN2Q0NmEwMTc4MTg1YTA1Yjp7fQ==	2018-03-19 23:15:35.933555+05
9lkgq1yigutrhl9ci782imfmago3lh6z	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-04-09 03:45:59.507688+05
vjvr8v9715ko8r39jubga2grbv01ptm6	ODY3Mjc2NmFkZGJhODQ0MmY4YTM1ZDAxN2Q0NmEwMTc4MTg1YTA1Yjp7fQ==	2018-03-19 23:16:37.320762+05
b9dk23ju7292i9crwq4x2pk5aag9bjk8	ODY3Mjc2NmFkZGJhODQ0MmY4YTM1ZDAxN2Q0NmEwMTc4MTg1YTA1Yjp7fQ==	2018-03-19 23:16:52.420859+05
z74wy0cnqh38bowdnst3l7hp8dvz322q	ODY3Mjc2NmFkZGJhODQ0MmY4YTM1ZDAxN2Q0NmEwMTc4MTg1YTA1Yjp7fQ==	2018-03-21 11:38:18.126871+05
mhhl87v8svg4xnqune1mlvewy8mqfgi1	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-21 20:42:13.699247+05
uwwezzwg00rkm5p3haxyfanhtp5t5av7	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-23 19:07:52.007988+05
pu7mikv122n9jfol6qokyfi2qm1uaje8	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-23 19:34:29.104381+05
\.


--
-- Data for Name: main_banner; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_banner (id, "order") FROM stdin;
1	0
2	0
\.


--
-- Name: main_banner_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.main_banner_id_seq', 2, true);


--
-- Data for Name: main_banner_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_banner_translation (id, language_code, name, slug, image, master_id) FROM stdin;
1	ru	Супер-прочные краски от "SICO"	super-prochnye-kraski-ot-sico	banners/2018/02/22/lion.jpg	1
2	ru	Супер-прочные краски от "SICO"	super-prochnye-kraski-ot-sico2	banners/2018/02/22/hmk1.jpg	2
3	en	Super power	super-power	banners/2018/02/27/hmk1.jpg	2
4	uz	Super mustahkam	super-mustahkam	banners/2018/02/27/hmk1_iaKshUz.jpg	2
\.


--
-- Name: main_banner_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.main_banner_translation_id_seq', 4, true);


--
-- Data for Name: main_customermenu; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_customermenu (id, "order") FROM stdin;
\.


--
-- Name: main_customermenu_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.main_customermenu_id_seq', 1, false);


--
-- Data for Name: main_customermenu_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_customermenu_translation (id, language_code, name, slug, master_id) FROM stdin;
\.


--
-- Name: main_customermenu_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.main_customermenu_translation_id_seq', 1, false);


--
-- Data for Name: main_customersmenu; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_customersmenu (menu_ptr_id) FROM stdin;
\.


--
-- Data for Name: main_menu; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_menu (id, "order") FROM stdin;
1	0
2	0
4	0
3	0
\.


--
-- Name: main_menu_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.main_menu_id_seq', 4, true);


--
-- Data for Name: main_menu_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_menu_translation (id, language_code, name, slug, master_id) FROM stdin;
1	ru	Доставка	dostavka	1
2	ru	Оплата	oplata	2
3	ru	Контакты	kontakty	3
4	ru	Премущества	premushestva	4
5	en	Benefits	benefits	4
6	uz	Avfzalliklarimiz	avfzalliklarimiz	4
\.


--
-- Name: main_menu_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.main_menu_translation_id_seq', 6, true);


--
-- Data for Name: main_static; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_static (id) FROM stdin;
1
2
3
4
\.


--
-- Name: main_static_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.main_static_id_seq', 4, true);


--
-- Data for Name: main_static_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_static_translation (id, language_code, name, slug, image, body, master_id) FROM stdin;
1	ru	Доставка	dostavka		<p>ДоставкаДоставкаДоставкаДоставкаДоставкаДоставкаДоставкаДоставкаДоставкаДоставка</p>	1
2	ru	Оплата	oplata		<p>ОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплата</p>	2
3	ru	Контакты	kontakty		<p>КонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтакты</p>	3
4	ru	Премущества	premushestva		<p>ПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремущества</p>	4
5	en	Benefits	benefits		<p><a href="http://127.0.0.1:8000/en/admin/main/menu/4/change/">BenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefits</a></p>	4
6	en	Contact	contact		<p>ContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContact</p>	3
\.


--
-- Name: main_static_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.main_static_translation_id_seq', 6, true);


--
-- Data for Name: main_usermenu; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_usermenu (id, "order") FROM stdin;
\.


--
-- Name: main_usermenu_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.main_usermenu_id_seq', 1, false);


--
-- Data for Name: main_usermenu_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_usermenu_translation (id, language_code, name, slug, master_id) FROM stdin;
\.


--
-- Name: main_usermenu_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.main_usermenu_translation_id_seq', 1, false);


--
-- Data for Name: main_usersmenu; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_usersmenu (menu_ptr_id) FROM stdin;
\.


--
-- Data for Name: orders_cart; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.orders_cart (id, session_key, count, status, total_price, order_id, variation_id) FROM stdin;
\.


--
-- Name: orders_cart_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.orders_cart_id_seq', 108, true);


--
-- Data for Name: orders_order; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.orders_order (id, client_name, created, customer_id, phone, shipping_address, state, total_price, order_unique_id) FROM stdin;
10	A'zam Mamatmurodov	2018-03-09 18:49:38.300842+05	1	998389478	Address madres	0	120000.00	212bbd73-5a3d-4dbd-85b8-c0f2e45bb939
11	A'zam Mamatmurodov	2018-03-09 19:54:16.51196+05	1	998389478	Address	0	108000.00	\N
12	A'zam Mamatmurodov	2018-03-09 19:56:21.025298+05	1	998389478	Address	0	60000.00	321fe3fb-bd17-4b8e-a0f6-bb5d8f8e2b3c
13	A'zam Mamatmurodov	2018-03-09 20:03:08.089572+05	1	998389478	Address	0	380000.00	274cb72d-a2fd-49da-9d2f-dba886562b7d
14	A'zam Mamatmurodov	2018-03-09 20:07:39.513418+05	1	998389478	Tashkent	0	291000.00	b8d78341-9766-4cef-a913-fb75477da46d
15	Maxam	2018-03-10 19:38:21.31875+05	\N	998998389478	Tashkent, Mirzo Ulug'bek distr.	0	178000.00	8c6efc72-dd23-4dc9-a17b-c70ed1a19e7d
\.


--
-- Name: orders_order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.orders_order_id_seq', 15, true);


--
-- Data for Name: products_brands; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.products_brands (id, name, logo, category_id) FROM stdin;
20	Polard	brands/leones-fondos-de-pantalla-hd-Fotosdelanaturaleza-4-1024x640.jpg	10
21	Hayat	brands/VGjc50U.jpg	19
\.


--
-- Name: products_brands_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.products_brands_id_seq', 21, true);


--
-- Data for Name: products_category; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.products_category (id, "order", lft, rght, tree_id, mptt_level, parent_id) FROM stdin;
4	0	1	2	3	0	\N
11	0	2	3	4	1	5
12	0	4	5	4	1	5
6	0	1	2	6	0	\N
7	0	1	2	7	0	\N
8	0	1	2	8	0	\N
9	0	1	2	9	0	\N
14	0	12	13	4	1	5
15	0	14	15	4	1	5
19	0	3	4	10	2	18
20	0	5	6	10	2	18
2	0	1	4	1	0	\N
3	0	1	4	2	0	\N
22	0	2	3	2	1	3
23	0	7	8	10	2	18
13	0	6	11	4	1	5
21	0	2	3	1	1	2
17	0	9	10	4	2	13
16	0	7	8	4	2	13
5	0	1	16	4	0	\N
10	0	1	12	10	0	\N
18	0	2	11	10	1	10
24	0	9	10	10	2	18
\.


--
-- Name: products_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.products_category_id_seq', 24, true);


--
-- Data for Name: products_category_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.products_category_translation (id, language_code, name, master_id, slug) FROM stdin;
2	ru	Водоэмульсионная краска	2	vodoimulsionnaya-kraska
3	uz	Vodoimulsiya kraska	2	vodoimulsiya-kraska
4	ru	Герметика и Монтаж пена	3	germetika-i-montazh-pena
5	ru	Грунтовка	4	gruntovka
6	ru	Декоративная штукатура	5	dekorativnaya-shtukatura
7	ru	Инструменты	6	instrumenty
8	ru	Клеи	7	klei
9	ru	Колер	8	koler
10	ru	Сухие строй-смеси	9	suhie-stroj-smesi
11	ru	Эмалевая краска и Лак	10	emalevaya-kraska-i-lak
12	ru	Внутренная	11	vnutrennaya
13	ru	Премиум	12	premium
15	ru	Фасадная	14	fasadnaya
16	ru	Цветная	15	cvetnaya
19	en	Water-based paint	2	water-based-paint
20	ru	Краска	18	kraska
21	ru	Универсальная	19	universalnaya
22	ru	Половая	20	polovaya
24	ru	Пена	22	pena
25	ru	Краска-115	23	kraska-115
14	ru	Универсальная	13	dekorativnaya-shkaturka-universalnaya
23	ru	Фасадная	21	vodoimmulsionnaya-kraska-fasadnaya
18	ru	Премиум	17	dekorativnaya-shkaturka-universalnaya-premium
17	ru	Внутренная	16	dekorativnaya-shkaturka-universalnaya-vnutrennaya
26	ru	Цветная	24	kraska-cvetnaya
\.


--
-- Name: products_category_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.products_category_translation_id_seq', 26, true);


--
-- Data for Name: products_color; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.products_color (id, color) FROM stdin;
1	#FF0000
2	#3CB823
3	#197DFF
5	#FFFFFF
6	#14A1FF
7	#FFE357
8	#41FF33
9	#FF4A4A
10	#FF3399
13	#0D090C
14	#FFDE5C
\.


--
-- Data for Name: products_color_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.products_color_translation (id, language_code, name, master_id) FROM stdin;
1	ru	Красный	1
2	en	Red	1
3	uz	Qizil	1
4	uz	Yashil	2
5	ru	Зеленый	2
6	en	Green	2
7	ru	Синий	3
9	ru	белая	5
10	ru	голубая	6
11	ru	желтая	7
12	ru	темно-зеленая	8
13	ru	красно-коричневая	9
14	ru	светло-серая	10
17	ru	черная	13
18	ru	светло-бежевая	14
\.


--
-- Name: products_color_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.products_color_translation_id_seq', 18, true);


--
-- Data for Name: products_product; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.products_product (id, name, description, characters, brand_id, category_id, owner_id, updated, available_in_stock, volume_id, is_recommended, price, is_top, default_image, image_0, image_1, image_2) FROM stdin;
37	HAYAT Эмаль ПФ-115	Предназначена для окрашивания металлических, деревянных и других поверхностей, подвергающихся атмосферным восдействиям.	Предназначена для окрашивания металлических, деревянных и других поверхностей, подвергающихся атмосферным восдействиям.	21	24	4	2018-03-27	t	1	t	12200.00	t	image_0	products/dota_2_igra_logotip_fon_92935_1920x1080.jpg	products/dota_2_igra_logotip_fon_92935_1920x1080.jpg	products/JSJ6EBorAEE.jpg
10	HAYAT PREMIUM FASAD Краска для нар. работ силикон2	Предназначена для наржной окраски зданий и сооружений, по кирпичным и бетонным, деревянным и другим пористым покрытиям по загрунтованной поверхности металла2	Test info2	21	23	3	2018-03-27	f	1	t	1010000.00	t	image_0	products/earth_by_n4u2k.jpg	products/prod.png	
91	Test - Hayat	Test – Hayat – 2	Test – Hayat – 3	21	23	3	2018-03-27	f	1	f	7600.00	f	image_0	products/prod.png	products/earth_by_n4u2k.jpg	products/dota_2_igra_logotip_fon_92935_1920x1080.jpg
\.


--
-- Name: products_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.products_product_id_seq', 91, true);


--
-- Name: products_productcolor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.products_productcolor_id_seq', 14, true);


--
-- Data for Name: products_productimage; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.products_productimage (id, image, product_id) FROM stdin;
25	products/2018/03/01/seo-fon_0I6POl8.jpg	10
26	products/2018/03/01/wire2_j6kkOnf.png	10
27	products/2018/03/01/VGjc50U_zvJmcmb.jpg	10
29	products/dota_2_igra_logotip_fon_92935_1920x1080.jpg	37
\.


--
-- Name: products_productimage_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.products_productimage_id_seq', 31, true);


--
-- Data for Name: products_review; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.products_review (created_at, id, text, is_approved, product_id, reviewer_location, subject, reviewer) FROM stdin;
2018-03-02 05:13:14.751711+05	16	Test message	t	10	Tashkent	Test comment	Maxam
2018-03-02 05:13:47.21186+05	17	Test message	f	10	Tashkent	Test comment	Maxam
2018-03-02 05:15:33.576381+05	18	Test message	f	10	Tashkent	Test comment	Maxam
\.


--
-- Name: products_review_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.products_review_id_seq', 18, true);


--
-- Data for Name: products_variation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.products_variation (id, price, quantity, product_id, name, color_id) FROM stdin;
126	5500.00	2	37	0.9	5
127	5001.00	4	37	3	6
128	5601.00	6	37	3	7
129	5502.00	8	37	22	2
131	5503.00	11	37	2.5	1
132	5603.00	12	37	22	9
133	5504.00	14	37	3	10
134	5005.00	16	37	3	3
130	5505.00	17	37	3	8
135	5006.00	19	37	2.5	13
136	5506.00	20	37	22	14
137	4600.00	5	10	20	13
138	6600.00	4	10	10	14
140	17600.00	3	91	11	14
\.


--
-- Name: products_variation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.products_variation_id_seq', 140, true);


--
-- Data for Name: products_volumetype; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.products_volumetype (id) FROM stdin;
1
\.


--
-- Name: products_volumetype_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.products_volumetype_id_seq', 1, true);


--
-- Data for Name: products_volumetype_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.products_volumetype_translation (id, language_code, name, master_id) FROM stdin;
1	ru	Кг	1
2	en	Kg	1
3	uz	Kg	1
\.


--
-- Name: products_volumetype_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.products_volumetype_translation_id_seq', 3, true);


--
-- Data for Name: users_client; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.users_client (id, address, user_id) FROM stdin;
1	Address	1
\.


--
-- Name: users_client_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.users_client_id_seq', 1, true);


--
-- Data for Name: users_files; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.users_files (id, file) FROM stdin;
\.


--
-- Name: users_files_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.users_files_id_seq', 1, false);


--
-- Data for Name: users_merchant; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.users_merchant (id, merchant_type, user_id) FROM stdin;
1	1	3
2	1	4
\.


--
-- Name: users_merchant_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.users_merchant_id_seq', 2, true);


--
-- Data for Name: users_user; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.users_user (id, password, last_login, is_superuser, is_staff, phone, email, first_name, last_name, date_joined, is_active, avatar_id) FROM stdin;
14	pbkdf2_sha256$36000$oYwb6del7oVe$e2SFCWUn7kwhy6z32Cj5FcB5oVWbuS977+FK+Kk1drg=	\N	f	f	99812312		Maxam		2018-03-03 18:11:20.079564+05	t	\N
1	pbkdf2_sha256$36000$MddcO5HnWX0h$n0Qq4sdTvSNPKruWKfweTttJaHuNjTugrYLUi+S1nZ4=	2018-03-26 03:45:59.484437+05	t	t	998389478	azam.mamatmurodov@gmail.com	A'zam	Mamatmurodov	2018-02-14 01:24:32.11251+05	t	\N
15	pbkdf2_sha256$36000$HOOZQHNqLuX4$qlyg6hArRImovqYBQCLrrQ9PzDxVFFQfG3VH2fZml8o=	\N	f	f	12312		asas		2018-03-07 05:54:41.298668+05	t	\N
16	pbkdf2_sha256$36000$dTZAiIpWdoiW$XAsCma9iqN3t16g2CeQ807/KB14JpNjcUY0F7CSTwq0=	2018-03-07 05:57:50.127116+05	f	f	123		maxam		2018-03-07 05:57:06.657493+05	t	\N
3	pbkdf2_sha256$36000$zZ1POOYiN9cm$MmRm0Ti8P7zmmHwIIh3oGTdQXuvv+8IXENglAuO19Vs=	\N	f	f	998991111111	Polard@example.com	Polard	Polard	2018-03-02 00:48:40.791109+05	t	\N
4	pbkdf2_sha256$36000$cmVDwSWrOft2$dDTZO7VzHOkz2k4tFU1mhCmujVBWLiSPhXqFpS4mteE=	\N	f	f	991234567	Hayat@example.com	Hayat	Hayat	2018-03-02 00:49:27.367788+05	t	\N
12	pbkdf2_sha256$36000$mi6hUfz6r2OZ$i3anJwfWPj92QI0Y3jh1gAfB3xwiGq1oV7SWqG93fTE=	\N	f	f	1234567		Mamatmurodov		2018-03-03 02:09:15.192667+05	t	\N
13	pbkdf2_sha256$36000$OyPip0KnrHgB$8fLeZhVKAgAcogd/n9dAirWo2Gv2Q2gD8X5PKWxdbf4=	2018-03-03 02:09:49.258501+05	f	f	12345		Mamatmurodov		2018-03-03 02:09:40.723852+05	t	\N
\.


--
-- Data for Name: users_user_groups; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.users_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- Name: users_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.users_user_groups_id_seq', 1, false);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.users_user_id_seq', 16, true);


--
-- Data for Name: users_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.users_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- Name: users_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.users_user_user_permissions_id_seq', 1, false);


--
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: main_banner main_banner_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_banner
    ADD CONSTRAINT main_banner_pkey PRIMARY KEY (id);


--
-- Name: main_banner_translation main_banner_translation_language_code_master_id_ebf3668a_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_banner_translation
    ADD CONSTRAINT main_banner_translation_language_code_master_id_ebf3668a_uniq UNIQUE (language_code, master_id);


--
-- Name: main_banner_translation main_banner_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_banner_translation
    ADD CONSTRAINT main_banner_translation_pkey PRIMARY KEY (id);


--
-- Name: main_customermenu main_customermenu_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_customermenu
    ADD CONSTRAINT main_customermenu_pkey PRIMARY KEY (id);


--
-- Name: main_customermenu_translation main_customermenu_transl_language_code_master_id_e197b468_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_customermenu_translation
    ADD CONSTRAINT main_customermenu_transl_language_code_master_id_e197b468_uniq UNIQUE (language_code, master_id);


--
-- Name: main_customermenu_translation main_customermenu_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_customermenu_translation
    ADD CONSTRAINT main_customermenu_translation_pkey PRIMARY KEY (id);


--
-- Name: main_customersmenu main_customersmenu_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_customersmenu
    ADD CONSTRAINT main_customersmenu_pkey PRIMARY KEY (menu_ptr_id);


--
-- Name: main_menu main_menu_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_menu
    ADD CONSTRAINT main_menu_pkey PRIMARY KEY (id);


--
-- Name: main_menu_translation main_menu_translation_language_code_master_id_a87e80af_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_menu_translation
    ADD CONSTRAINT main_menu_translation_language_code_master_id_a87e80af_uniq UNIQUE (language_code, master_id);


--
-- Name: main_menu_translation main_menu_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_menu_translation
    ADD CONSTRAINT main_menu_translation_pkey PRIMARY KEY (id);


--
-- Name: main_static main_static_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_static
    ADD CONSTRAINT main_static_pkey PRIMARY KEY (id);


--
-- Name: main_static_translation main_static_translation_language_code_master_id_f27431bb_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_static_translation
    ADD CONSTRAINT main_static_translation_language_code_master_id_f27431bb_uniq UNIQUE (language_code, master_id);


--
-- Name: main_static_translation main_static_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_static_translation
    ADD CONSTRAINT main_static_translation_pkey PRIMARY KEY (id);


--
-- Name: main_usermenu main_usermenu_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_usermenu
    ADD CONSTRAINT main_usermenu_pkey PRIMARY KEY (id);


--
-- Name: main_usermenu_translation main_usermenu_translation_language_code_master_id_c91aa177_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_usermenu_translation
    ADD CONSTRAINT main_usermenu_translation_language_code_master_id_c91aa177_uniq UNIQUE (language_code, master_id);


--
-- Name: main_usermenu_translation main_usermenu_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_usermenu_translation
    ADD CONSTRAINT main_usermenu_translation_pkey PRIMARY KEY (id);


--
-- Name: main_usersmenu main_usersmenu_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_usersmenu
    ADD CONSTRAINT main_usersmenu_pkey PRIMARY KEY (menu_ptr_id);


--
-- Name: orders_cart orders_cart_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.orders_cart
    ADD CONSTRAINT orders_cart_pkey PRIMARY KEY (id);


--
-- Name: orders_order orders_order_order_unique_id_01fff898_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.orders_order
    ADD CONSTRAINT orders_order_order_unique_id_01fff898_uniq UNIQUE (order_unique_id);


--
-- Name: orders_order orders_order_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.orders_order
    ADD CONSTRAINT orders_order_pkey PRIMARY KEY (id);


--
-- Name: products_brands products_brands_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_brands
    ADD CONSTRAINT products_brands_pkey PRIMARY KEY (id);


--
-- Name: products_category products_category_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_category
    ADD CONSTRAINT products_category_pkey PRIMARY KEY (id);


--
-- Name: products_category_translation products_category_transl_language_code_master_id_03d12f31_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_category_translation
    ADD CONSTRAINT products_category_transl_language_code_master_id_03d12f31_uniq UNIQUE (language_code, master_id);


--
-- Name: products_category_translation products_category_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_category_translation
    ADD CONSTRAINT products_category_translation_pkey PRIMARY KEY (id);


--
-- Name: products_category_translation products_category_translation_slug_d9e2774a_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_category_translation
    ADD CONSTRAINT products_category_translation_slug_d9e2774a_uniq UNIQUE (slug);


--
-- Name: products_color_translation products_color_translati_language_code_master_id_3b02aa43_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_color_translation
    ADD CONSTRAINT products_color_translati_language_code_master_id_3b02aa43_uniq UNIQUE (language_code, master_id);


--
-- Name: products_color_translation products_color_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_color_translation
    ADD CONSTRAINT products_color_translation_pkey PRIMARY KEY (id);


--
-- Name: products_product products_product_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_product
    ADD CONSTRAINT products_product_pkey PRIMARY KEY (id);


--
-- Name: products_color products_productcolor_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_color
    ADD CONSTRAINT products_productcolor_pkey PRIMARY KEY (id);


--
-- Name: products_productimage products_productimage_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_productimage
    ADD CONSTRAINT products_productimage_pkey PRIMARY KEY (id);


--
-- Name: products_review products_review_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_review
    ADD CONSTRAINT products_review_pkey PRIMARY KEY (id);


--
-- Name: products_variation products_variation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_variation
    ADD CONSTRAINT products_variation_pkey PRIMARY KEY (id);


--
-- Name: products_volumetype products_volumetype_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_volumetype
    ADD CONSTRAINT products_volumetype_pkey PRIMARY KEY (id);


--
-- Name: products_volumetype_translation products_volumetype_tran_language_code_master_id_fb95d2c8_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_volumetype_translation
    ADD CONSTRAINT products_volumetype_tran_language_code_master_id_fb95d2c8_uniq UNIQUE (language_code, master_id);


--
-- Name: products_volumetype_translation products_volumetype_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_volumetype_translation
    ADD CONSTRAINT products_volumetype_translation_pkey PRIMARY KEY (id);


--
-- Name: users_client users_client_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_client
    ADD CONSTRAINT users_client_pkey PRIMARY KEY (id);


--
-- Name: users_client users_client_user_id_key; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_client
    ADD CONSTRAINT users_client_user_id_key UNIQUE (user_id);


--
-- Name: users_files users_files_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_files
    ADD CONSTRAINT users_files_pkey PRIMARY KEY (id);


--
-- Name: users_merchant users_merchant_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_merchant
    ADD CONSTRAINT users_merchant_pkey PRIMARY KEY (id);


--
-- Name: users_merchant users_merchant_user_id_key; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_merchant
    ADD CONSTRAINT users_merchant_user_id_key UNIQUE (user_id);


--
-- Name: users_user users_user_avatar_id_key; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user
    ADD CONSTRAINT users_user_avatar_id_key UNIQUE (avatar_id);


--
-- Name: users_user_groups users_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user_groups
    ADD CONSTRAINT users_user_groups_pkey PRIMARY KEY (id);


--
-- Name: users_user_groups users_user_groups_user_id_group_id_b88eab82_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user_groups
    ADD CONSTRAINT users_user_groups_user_id_group_id_b88eab82_uniq UNIQUE (user_id, group_id);


--
-- Name: users_user users_user_phone_fe37f55c_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user
    ADD CONSTRAINT users_user_phone_fe37f55c_uniq UNIQUE (phone);


--
-- Name: users_user users_user_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user
    ADD CONSTRAINT users_user_pkey PRIMARY KEY (id);


--
-- Name: users_user_user_permissions users_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user_user_permissions
    ADD CONSTRAINT users_user_user_permissions_pkey PRIMARY KEY (id);


--
-- Name: users_user_user_permissions users_user_user_permissions_user_id_permission_id_43338c45_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user_user_permissions
    ADD CONSTRAINT users_user_user_permissions_user_id_permission_id_43338c45_uniq UNIQUE (user_id, permission_id);


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: main_banner_translation_language_code_18439eee; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_banner_translation_language_code_18439eee ON public.main_banner_translation USING btree (language_code);


--
-- Name: main_banner_translation_language_code_18439eee_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_banner_translation_language_code_18439eee_like ON public.main_banner_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: main_banner_translation_master_id_f62e61c4; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_banner_translation_master_id_f62e61c4 ON public.main_banner_translation USING btree (master_id);


--
-- Name: main_banner_translation_slug_f62a4547; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_banner_translation_slug_f62a4547 ON public.main_banner_translation USING btree (slug);


--
-- Name: main_banner_translation_slug_f62a4547_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_banner_translation_slug_f62a4547_like ON public.main_banner_translation USING btree (slug varchar_pattern_ops);


--
-- Name: main_customermenu_translation_language_code_8821aca5; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_customermenu_translation_language_code_8821aca5 ON public.main_customermenu_translation USING btree (language_code);


--
-- Name: main_customermenu_translation_language_code_8821aca5_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_customermenu_translation_language_code_8821aca5_like ON public.main_customermenu_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: main_customermenu_translation_master_id_094e74e8; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_customermenu_translation_master_id_094e74e8 ON public.main_customermenu_translation USING btree (master_id);


--
-- Name: main_customermenu_translation_slug_0b9f55a4; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_customermenu_translation_slug_0b9f55a4 ON public.main_customermenu_translation USING btree (slug);


--
-- Name: main_customermenu_translation_slug_0b9f55a4_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_customermenu_translation_slug_0b9f55a4_like ON public.main_customermenu_translation USING btree (slug varchar_pattern_ops);


--
-- Name: main_menu_translation_language_code_b760b451; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_menu_translation_language_code_b760b451 ON public.main_menu_translation USING btree (language_code);


--
-- Name: main_menu_translation_language_code_b760b451_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_menu_translation_language_code_b760b451_like ON public.main_menu_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: main_menu_translation_master_id_6cb98964; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_menu_translation_master_id_6cb98964 ON public.main_menu_translation USING btree (master_id);


--
-- Name: main_menu_translation_slug_155a9128; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_menu_translation_slug_155a9128 ON public.main_menu_translation USING btree (slug);


--
-- Name: main_menu_translation_slug_155a9128_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_menu_translation_slug_155a9128_like ON public.main_menu_translation USING btree (slug varchar_pattern_ops);


--
-- Name: main_static_translation_language_code_a7e35ca0; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_static_translation_language_code_a7e35ca0 ON public.main_static_translation USING btree (language_code);


--
-- Name: main_static_translation_language_code_a7e35ca0_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_static_translation_language_code_a7e35ca0_like ON public.main_static_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: main_static_translation_master_id_6c9d2d70; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_static_translation_master_id_6c9d2d70 ON public.main_static_translation USING btree (master_id);


--
-- Name: main_static_translation_slug_7864d7f2; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_static_translation_slug_7864d7f2 ON public.main_static_translation USING btree (slug);


--
-- Name: main_static_translation_slug_7864d7f2_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_static_translation_slug_7864d7f2_like ON public.main_static_translation USING btree (slug varchar_pattern_ops);


--
-- Name: main_usermenu_translation_language_code_93134d44; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_usermenu_translation_language_code_93134d44 ON public.main_usermenu_translation USING btree (language_code);


--
-- Name: main_usermenu_translation_language_code_93134d44_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_usermenu_translation_language_code_93134d44_like ON public.main_usermenu_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: main_usermenu_translation_master_id_ec69a6aa; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_usermenu_translation_master_id_ec69a6aa ON public.main_usermenu_translation USING btree (master_id);


--
-- Name: main_usermenu_translation_slug_fff0b13a; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_usermenu_translation_slug_fff0b13a ON public.main_usermenu_translation USING btree (slug);


--
-- Name: main_usermenu_translation_slug_fff0b13a_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_usermenu_translation_slug_fff0b13a_like ON public.main_usermenu_translation USING btree (slug varchar_pattern_ops);


--
-- Name: orders_cart_order_id_8e8f80ce; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX orders_cart_order_id_8e8f80ce ON public.orders_cart USING btree (order_id);


--
-- Name: orders_cart_variation_id_09aeaf8e; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX orders_cart_variation_id_09aeaf8e ON public.orders_cart USING btree (variation_id);


--
-- Name: orders_order_customer_id_0b76f6a4; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX orders_order_customer_id_0b76f6a4 ON public.orders_order USING btree (customer_id);


--
-- Name: orders_order_order_unique_id_01fff898_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX orders_order_order_unique_id_01fff898_like ON public.orders_order USING btree (order_unique_id varchar_pattern_ops);


--
-- Name: products_brands_category_id_90ebd3a5; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_brands_category_id_90ebd3a5 ON public.products_brands USING btree (category_id);


--
-- Name: products_category_level_999bd550; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_level_999bd550 ON public.products_category USING btree (mptt_level);


--
-- Name: products_category_lft_b068de9d; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_lft_b068de9d ON public.products_category USING btree (lft);


--
-- Name: products_category_parent_id_3388f6c9; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_parent_id_3388f6c9 ON public.products_category USING btree (parent_id);


--
-- Name: products_category_rght_c5971abd; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_rght_c5971abd ON public.products_category USING btree (rght);


--
-- Name: products_category_translation_language_code_ddf7527e; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_translation_language_code_ddf7527e ON public.products_category_translation USING btree (language_code);


--
-- Name: products_category_translation_language_code_ddf7527e_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_translation_language_code_ddf7527e_like ON public.products_category_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: products_category_translation_master_id_f53287e3; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_translation_master_id_f53287e3 ON public.products_category_translation USING btree (master_id);


--
-- Name: products_category_translation_slug_d9e2774a_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_translation_slug_d9e2774a_like ON public.products_category_translation USING btree (slug varchar_pattern_ops);


--
-- Name: products_category_tree_id_7d9b3ae8; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_tree_id_7d9b3ae8 ON public.products_category USING btree (tree_id);


--
-- Name: products_color_translation_language_code_f0d74222; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_color_translation_language_code_f0d74222 ON public.products_color_translation USING btree (language_code);


--
-- Name: products_color_translation_language_code_f0d74222_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_color_translation_language_code_f0d74222_like ON public.products_color_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: products_color_translation_master_id_3e7ac7bb; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_color_translation_master_id_3e7ac7bb ON public.products_color_translation USING btree (master_id);


--
-- Name: products_product_brand_id_3e2e8fd1; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_product_brand_id_3e2e8fd1 ON public.products_product USING btree (brand_id);


--
-- Name: products_product_category_id_9b594869; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_product_category_id_9b594869 ON public.products_product USING btree (category_id);


--
-- Name: products_product_owner_id_f189d068; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_product_owner_id_f189d068 ON public.products_product USING btree (owner_id);


--
-- Name: products_product_volume_id_9a242362; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_product_volume_id_9a242362 ON public.products_product USING btree (volume_id);


--
-- Name: products_productimage_product_id_e747596a; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_productimage_product_id_e747596a ON public.products_productimage USING btree (product_id);


--
-- Name: products_review_product_id_d933ffa7; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_review_product_id_d933ffa7 ON public.products_review USING btree (product_id);


--
-- Name: products_variation_color_id_67e0ff3a; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_variation_color_id_67e0ff3a ON public.products_variation USING btree (color_id);


--
-- Name: products_variation_product_id_58e457dc; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_variation_product_id_58e457dc ON public.products_variation USING btree (product_id);


--
-- Name: products_volumetype_translation_language_code_1d9b9128; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_volumetype_translation_language_code_1d9b9128 ON public.products_volumetype_translation USING btree (language_code);


--
-- Name: products_volumetype_translation_language_code_1d9b9128_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_volumetype_translation_language_code_1d9b9128_like ON public.products_volumetype_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: products_volumetype_translation_master_id_f5e4ae1f; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_volumetype_translation_master_id_f5e4ae1f ON public.products_volumetype_translation USING btree (master_id);


--
-- Name: users_user_groups_group_id_9afc8d0e; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX users_user_groups_group_id_9afc8d0e ON public.users_user_groups USING btree (group_id);


--
-- Name: users_user_groups_user_id_5f6f5a90; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX users_user_groups_user_id_5f6f5a90 ON public.users_user_groups USING btree (user_id);


--
-- Name: users_user_phone_fe37f55c_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX users_user_phone_fe37f55c_like ON public.users_user USING btree (phone varchar_pattern_ops);


--
-- Name: users_user_user_permissions_permission_id_0b93982e; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX users_user_user_permissions_permission_id_0b93982e ON public.users_user_user_permissions USING btree (permission_id);


--
-- Name: users_user_user_permissions_user_id_20aca447; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX users_user_user_permissions_user_id_20aca447 ON public.users_user_user_permissions USING btree (user_id);


--
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_users_user_id FOREIGN KEY (user_id) REFERENCES public.users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: main_banner_translation main_banner_translation_master_id_f62e61c4_fk_main_banner_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_banner_translation
    ADD CONSTRAINT main_banner_translation_master_id_f62e61c4_fk_main_banner_id FOREIGN KEY (master_id) REFERENCES public.main_banner(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: main_customermenu_translation main_customermenu_tr_master_id_094e74e8_fk_main_cust; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_customermenu_translation
    ADD CONSTRAINT main_customermenu_tr_master_id_094e74e8_fk_main_cust FOREIGN KEY (master_id) REFERENCES public.main_customermenu(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: main_customersmenu main_customersmenu_menu_ptr_id_754679f5_fk_main_menu_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_customersmenu
    ADD CONSTRAINT main_customersmenu_menu_ptr_id_754679f5_fk_main_menu_id FOREIGN KEY (menu_ptr_id) REFERENCES public.main_menu(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: main_menu_translation main_menu_translation_master_id_6cb98964_fk_main_menu_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_menu_translation
    ADD CONSTRAINT main_menu_translation_master_id_6cb98964_fk_main_menu_id FOREIGN KEY (master_id) REFERENCES public.main_menu(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: main_static_translation main_static_translation_master_id_6c9d2d70_fk_main_static_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_static_translation
    ADD CONSTRAINT main_static_translation_master_id_6c9d2d70_fk_main_static_id FOREIGN KEY (master_id) REFERENCES public.main_static(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: main_usermenu_translation main_usermenu_transl_master_id_ec69a6aa_fk_main_user; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_usermenu_translation
    ADD CONSTRAINT main_usermenu_transl_master_id_ec69a6aa_fk_main_user FOREIGN KEY (master_id) REFERENCES public.main_usermenu(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: main_usersmenu main_usersmenu_menu_ptr_id_6293e1ef_fk_main_menu_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_usersmenu
    ADD CONSTRAINT main_usersmenu_menu_ptr_id_6293e1ef_fk_main_menu_id FOREIGN KEY (menu_ptr_id) REFERENCES public.main_menu(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: orders_cart orders_cart_order_id_8e8f80ce_fk_orders_order_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.orders_cart
    ADD CONSTRAINT orders_cart_order_id_8e8f80ce_fk_orders_order_id FOREIGN KEY (order_id) REFERENCES public.orders_order(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: orders_cart orders_cart_variation_id_09aeaf8e_fk_products_variation_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.orders_cart
    ADD CONSTRAINT orders_cart_variation_id_09aeaf8e_fk_products_variation_id FOREIGN KEY (variation_id) REFERENCES public.products_variation(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: orders_order orders_order_customer_id_0b76f6a4_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.orders_order
    ADD CONSTRAINT orders_order_customer_id_0b76f6a4_fk_users_user_id FOREIGN KEY (customer_id) REFERENCES public.users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_brands products_brands_category_id_90ebd3a5_fk_products_category_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_brands
    ADD CONSTRAINT products_brands_category_id_90ebd3a5_fk_products_category_id FOREIGN KEY (category_id) REFERENCES public.products_category(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_category products_category_parent_id_3388f6c9_fk_products_category_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_category
    ADD CONSTRAINT products_category_parent_id_3388f6c9_fk_products_category_id FOREIGN KEY (parent_id) REFERENCES public.products_category(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_category_translation products_category_tr_master_id_f53287e3_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_category_translation
    ADD CONSTRAINT products_category_tr_master_id_f53287e3_fk_products_ FOREIGN KEY (master_id) REFERENCES public.products_category(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_color_translation products_color_trans_master_id_3e7ac7bb_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_color_translation
    ADD CONSTRAINT products_color_trans_master_id_3e7ac7bb_fk_products_ FOREIGN KEY (master_id) REFERENCES public.products_color(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product products_product_brand_id_3e2e8fd1_fk_products_brands_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_product
    ADD CONSTRAINT products_product_brand_id_3e2e8fd1_fk_products_brands_id FOREIGN KEY (brand_id) REFERENCES public.products_brands(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product products_product_category_id_9b594869_fk_products_category_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_product
    ADD CONSTRAINT products_product_category_id_9b594869_fk_products_category_id FOREIGN KEY (category_id) REFERENCES public.products_category(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product products_product_owner_id_f189d068_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_product
    ADD CONSTRAINT products_product_owner_id_f189d068_fk_users_user_id FOREIGN KEY (owner_id) REFERENCES public.users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product products_product_volume_id_9a242362_fk_products_volumetype_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_product
    ADD CONSTRAINT products_product_volume_id_9a242362_fk_products_volumetype_id FOREIGN KEY (volume_id) REFERENCES public.products_volumetype(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_productimage products_productimag_product_id_e747596a_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_productimage
    ADD CONSTRAINT products_productimag_product_id_e747596a_fk_products_ FOREIGN KEY (product_id) REFERENCES public.products_product(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_review products_review_product_id_d933ffa7_fk_products_product_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_review
    ADD CONSTRAINT products_review_product_id_d933ffa7_fk_products_product_id FOREIGN KEY (product_id) REFERENCES public.products_product(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_variation products_variation_color_id_67e0ff3a_fk_products_color_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_variation
    ADD CONSTRAINT products_variation_color_id_67e0ff3a_fk_products_color_id FOREIGN KEY (color_id) REFERENCES public.products_color(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_variation products_variation_product_id_58e457dc_fk_products_product_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_variation
    ADD CONSTRAINT products_variation_product_id_58e457dc_fk_products_product_id FOREIGN KEY (product_id) REFERENCES public.products_product(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_volumetype_translation products_volumetype__master_id_f5e4ae1f_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_volumetype_translation
    ADD CONSTRAINT products_volumetype__master_id_f5e4ae1f_fk_products_ FOREIGN KEY (master_id) REFERENCES public.products_volumetype(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_client users_client_user_id_06d1c832_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_client
    ADD CONSTRAINT users_client_user_id_06d1c832_fk_users_user_id FOREIGN KEY (user_id) REFERENCES public.users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_merchant users_merchant_user_id_30e64459_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_merchant
    ADD CONSTRAINT users_merchant_user_id_30e64459_fk_users_user_id FOREIGN KEY (user_id) REFERENCES public.users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_user users_user_avatar_id_2054405b_fk_users_files_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user
    ADD CONSTRAINT users_user_avatar_id_2054405b_fk_users_files_id FOREIGN KEY (avatar_id) REFERENCES public.users_files(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_user_groups users_user_groups_group_id_9afc8d0e_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user_groups
    ADD CONSTRAINT users_user_groups_group_id_9afc8d0e_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_user_groups users_user_groups_user_id_5f6f5a90_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user_groups
    ADD CONSTRAINT users_user_groups_user_id_5f6f5a90_fk_users_user_id FOREIGN KEY (user_id) REFERENCES public.users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_user_user_permissions users_user_user_perm_permission_id_0b93982e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user_user_permissions
    ADD CONSTRAINT users_user_user_perm_permission_id_0b93982e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_user_user_permissions users_user_user_permissions_user_id_20aca447_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user_user_permissions
    ADD CONSTRAINT users_user_user_permissions_user_id_20aca447_fk_users_user_id FOREIGN KEY (user_id) REFERENCES public.users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--

